import { MessageReaction, PartialUser, User, Role, Message, PartialMessage } from 'discord.js';
import db from 'quick.db'

const maxRR = 100



export interface ReactionRoleElement {
  emoji: string,
  roleID: string
}

export class ReactionRoleRoleManager {
  constructor() {}

  public add(id: string, rrEl: ReactionRoleElement) {
    db.push(`rr.roles.${id}`, rrEl)
  }

  public remove(id: string) {
    db.delete(`rr.roles.${id}`)
  }

  public get(id: string): ReactionRoleElement[] {
    return db.get(`rr.roles.${id}`)
  }

  public exist(id: string) {
    return db.get(`rr.roles.${id}`) ? true : false
  }
}



export class ReactionRoleCounter {
  constructor() {}

  public addRRCount(guildID: string) {
    db.add(`rr.counter.${guildID}`, 1)
  }

  public reduceRRCount(guildID: string) {
    db.subtract(`rr.counter.${guildID}`, 1)
  }

  public getRRCount(guildID: string): number {
    return db.get(`rr.counter.${guildID}`)
  }

  public setRRCount(guildID: string, val: number) {
    db.set(`rr.counter.${guildID}`, val)
  }

  public resetRRCount(guildID: string) {
    db.set(`rr.counter.${guildID}`, 0)
  }


  public RRStatus(guildID: string) {
    let rrStatus = db.get(`rr.counter.${guildID}`)

    if (!rrStatus) return true
    if (rrStatus >= maxRR) return false
    if (rrStatus < maxRR) return true
  }
} 
type Manager = ReactionRoleRoleManager | ReactionRoleCounter


export const GlobalReactionRoleRemove = (id: string, guildID: string) => {
  let m: Manager[] = [ new ReactionRoleRoleManager(), new ReactionRoleCounter() ]


  let mr = m[1] as ReactionRoleRoleManager
  mr.remove(id)

  let mc = m[2] as ReactionRoleCounter
  mc.reduceRRCount(guildID)
}



export async function reactionAddHandler(reaction: MessageReaction, user: PartialUser | User) {
  if (reaction.message.partial) await reaction.message.fetch()
  if (reaction.partial) await reaction.fetch()
  if (user.bot) return
  if (user.partial) user.fetch()

  if (!reaction.message.guild) return

  const rrRoles = new ReactionRoleRoleManager()
  
  if (rrRoles.exist(reaction.message.id)) {
    let roles = rrRoles.get(reaction.message.id)

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
  
  if (rrRoles.exist(reaction.message.id)) {
    let roles = rrRoles.get(reaction.message.id)

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
  if (msg.partial) await msg.fetch()

  if (rrRoles.get(msg.id) && msg.guild) {
    GlobalReactionRoleRemove(msg.id, msg.guild.id)
  }
}