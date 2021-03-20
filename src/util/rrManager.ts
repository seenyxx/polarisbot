import { MessageReaction, PartialUser, User, Role, Message, PartialMessage } from 'discord.js';
import { Database } from 'quickmongo';

const maxRR = 100

const db = new Database(process.env.NODE_ENV === 'production' ? require('../../config.json').db : require('../../config-dev.json').db);


export interface ReactionRoleElement {
  emoji: string,
  roleID: string
}

export class ReactionRoleRoleManager {
  constructor() {}

  public add(id: string, rrEl: ReactionRoleElement) {
    db.push(`rr_roles)${id}`, rrEl)
  }

  public remove(id: string) {
    db.delete(`rr_roles_${id}`)
  }

  public async get(id: string): Promise<ReactionRoleElement[]> {
    return await db.get(`rr_roles_${id}`)
  }

  public async exist(id: string) {
    return await db.get(`rr_roles_${id}`) ? true : false
  }
}



export class ReactionRoleCounter {
  constructor() {}

  public async addRRCount(guildID: string): Promise<number> {
    return await this.getRRCount(guildID) ? await db.add(`rrcounter.${guildID}`, 1) : await db.set(`rrcounter.${guildID}`, 1)
  }

  public reduceRRCount(guildID: string) {
    db.subtract(`rrcounter.${guildID}`, 1)
  }

  public async getRRCount(guildID: string): Promise<number> {
    return await db.get(`rrcounter.${guildID}`) ? await db.get(`rrcounter.${guildID}`) : 0
  }

  public setRRCount(guildID: string, val: number) {
    db.set(`rrcounter.${guildID}`, val)
  }

  public resetRRCount(guildID: string) {
    db.set(`rrcounter.${guildID}`, 0)
  }


  public async RRStatus(guildID: string) {
    let rrStatus = await db.get(`rrcounter.${guildID}`)

    if (!rrStatus) return true
    if (rrStatus >= maxRR) return false
    if (rrStatus < maxRR) return true
  }
}

type Manager = ReactionRoleRoleManager | ReactionRoleCounter


export const GlobalReactionRoleRemove = (id: string, guildID: string) => {
  let m: Manager[] = [ new ReactionRoleRoleManager(), new ReactionRoleCounter() ]


  let mr = m.shift() as ReactionRoleRoleManager
  mr.remove(id)

  let mc = m.shift() as ReactionRoleCounter
  mc.reduceRRCount(guildID)
}



export async function reactionAddHandler(reaction: MessageReaction, user: PartialUser | User) {
  if (reaction.message.partial) await reaction.message.fetch()
  if (reaction.partial) await reaction.fetch()
  if (user.bot) return
  if (user.partial) user.fetch()

  if (!reaction.message.guild) return

  const rrRoles = new ReactionRoleRoleManager()
  
  if (await rrRoles.exist(reaction.message.id)) {
    let roles = await rrRoles.get(reaction.message.id)

    for (let i = 0; i < roles.length; i++) {
      if (reaction.emoji.name == roles[i].emoji) {
        let role = reaction.message.guild.roles.cache.get(roles[i].roleID)
        let meHighest = reaction.message.guild.me?.roles.highest.position

        if (!role || ! meHighest) return

        if (role.position > meHighest) return

        let member = reaction.message.guild.member(user as User)

        if (!member) return

        member.roles.add(role)
      }
    }
  }

  return
}

export async function reactionRemoveHandler(reaction: MessageReaction, user: PartialUser | User) {
  if (reaction.message.partial) await reaction.message.fetch()
  if (reaction.partial) await reaction.fetch()
  if (user.bot) return
  if (user.partial) user.fetch()

  if (!reaction.message.guild) return

  const rrRoles = new ReactionRoleRoleManager()
  
  if (await rrRoles.exist(reaction.message.id)) {
    let roles = await rrRoles.get(reaction.message.id)

    for (let i = 0; i < roles.length; i++) {
      if (reaction.emoji.name == roles[i].emoji) {
        let role = reaction.message.guild.roles.cache.get(roles[i].roleID)
        let meHighest = reaction.message.guild.me?.roles.highest.position

        if (!role || ! meHighest) return

        if (role.position > meHighest) return

        let member = reaction.message.guild.member(user as User)

        if (!member) return

        if (member.roles.cache.has(role.id))
          member.roles.remove(role)
      }
    }
  }

  return
}


export async function handleDeletion(msg: Message | PartialMessage, rrRoles: ReactionRoleRoleManager) {

  if (await rrRoles.get(msg.id) && msg.guild) {
    GlobalReactionRoleRemove(msg.id, msg.guild.id)
  }
}