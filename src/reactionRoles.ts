import db from 'quick.db'

export function addRRCount(guildID: string) {
  db.add(`rr.${guildID}`, 1)
}

export function reduceRRCount(guildID: string) {
  db.subtract(`rr.${guildID}`, 1)
}

export function getRRCount(guildID: string) {
  return db.get(`rr.${guildID}`)
}

export function setRRCount(guildID: string, val: number) {
  db.set(`rr.${guildID}`, val)
}

export function resetRRCount(guildID: string) {
  db.set(`rr.${guildID}`, 0)
}

const maxRR = 100

export function RRStatus(guildID: string) {
  let rrStatus = db.get(`rr.${guildID}`)

  if (!rrStatus) return true
  if (rrStatus >= maxRR) return false
  if (rrStatus < maxRR) return true
}


export class ReactionRoleDB {
  constructor() {}

  
}