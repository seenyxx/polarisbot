import db from 'quick.db'

const maxRR = 100

export class ReactionRoleDB {
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