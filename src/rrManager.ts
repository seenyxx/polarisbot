import db from 'quick.db'

const maxRR = 100

export class ReactionRoleMsgManager {
  constructor() {}

  public set(id: string, roleName: string) {
    db.set(`rrmsg.${id}`, roleName)
  }

  public get(id: string) {
    return db.get(`rrmsg.${id}`)
  }

  public remove(id: string) {
    db.delete(`rrmsg.${id}`)
  }

  public exist(id: string) {
    return db.get(`rrmsg.${id}`) ? true : false
  }
}


export interface ReactionRoleElement {
  emoji: string,
  roleID: string
}

export class ReactionRoleRoleManager {
  constructor() {}

  public add(id: string, rrEl: ReactionRoleElement) {
    db.push(`rrmsgroles.${id}`, rrEl)
  }

  public remove(id: string) {
    db.delete(`rrmsgroles.${id}`)
  }
}



export class ReactionRoleCounter {
  constructor() {}

  public addRRCount(guildID: string) {
    db.add(`rr.${guildID}`, 1)
  }

  public reduceRRCount(guildID: string) {
    db.subtract(`rr.${guildID}`, 1)
  }

  public getRRCount(guildID: string) {
    return db.get(`rr.${guildID}`)
  }

  public setRRCount(guildID: string, val: number) {
    db.set(`rr.${guildID}`, val)
  }

  public resetRRCount(guildID: string) {
    db.set(`rr.${guildID}`, 0)
  }


  public RRStatus(guildID: string) {
    let rrStatus = db.get(`rr.${guildID}`)

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