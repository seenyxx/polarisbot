import { MessageReaction, PartialUser, User } from 'discord.js';
import db from 'quick.db'

const maxRR = 100

export class ReactionRoleMsgManager {
  constructor() {}

  public set(id: string, roleName: string) {
    db.set(`rr.msg.${id}`, roleName)
  }

  public get(id: string) {
    return db.get(`rr.msg.${id}`)
  }

  public remove(id: string) {
    db.delete(`rr.msg.${id}`)
  }

  public exist(id: string) {
    return db.get(`rr.msg.${id}`) ? true : false
  }
}


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

  public get(id: string) {
    return db.get(`rr.roles${id}`)
  }

  public exist(id: string) {
    return db.get(`rr.roles${id}`) ? true : false
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

  public getRRCount(guildID: string) {
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
type Manager =  ReactionRoleMsgManager | ReactionRoleRoleManager | ReactionRoleCounter


export const GlobalReactionRoleRemove = (id: string, guildID: string) => {
  let m: Manager[] = [ new ReactionRoleMsgManager(), new ReactionRoleRoleManager(), new ReactionRoleCounter() ]
  
  let mm = m[0] as ReactionRoleMsgManager
  mm.remove(id)

  let mr = m[1] as ReactionRoleRoleManager
  mr.remove(id)

  let mc = m[2] as ReactionRoleCounter
  mc.reduceRRCount(guildID)
}



export async function reactionHandler(reaction: MessageReaction, user: PartialUser | User) {
  if (reaction.message.partial) await reaction.message.fetch()
  if (reaction.partial) await reaction.fetch()
  if (user.bot) return
  if (!reaction.message.guild) return
  const rrMsg = new ReactionRoleMsgManager()
  const rrRoles = new ReactionRoleRoleManager()
  
  if (rrMsg.exist(reaction.message.id)) {
    let message = rrMsg.get(reaction.message.id)
    let roles = rrRoles.get(reaction.message.id)
  }
}