import db from 'quick.db';

export const xp = 50
export const xpPerLevel = 1000


export class Leveling {
  readonly userID
  readonly guildID
  private query
  constructor(userID: string, guildID: string) {
    this.userID = userID
    this.guildID = guildID
    this.query = `lvl${this.guildID}.${userID}`
  }

  public get(): number {
    return db.get(this.query) ? db.get(this.query) : 0
  }

  public set(val: number) {
    db.set(this.query, val)
  }
  
  public add(multi?: number) {
    db.add(this.query, multi ? xp * multi : xp)
  }

  public setColor(color: string) {
    db.set(`colors.${this.userID}`, color)
  }

  public getColor() {
    return db.get(`colors.${this.userID}`) ? db.get(`colors.${this.userID}`) : '#0099ff'
  }
}


export function setCoolDown(userID: string, guildID: string) {
  db.set(`lvlcd${guildID}.${userID}`, Date.now() + 60000)
}

export function checkCoolDown(userID: string, guildID: string) {
  const cd = db.get(`lvlcd${guildID}.${userID}`) ? db.get(`lvlcd${guildID}.${userID}`) : 0
  const now = Date.now()

  if (cd > now) return true
  else return false
}

export function lvlSetup(userID: string, guildID: string) {
  if (!checkCoolDown(userID, guildID)) {
    const lvl = new Leveling(userID, guildID)

    lvl.add()

    setCoolDown(userID, guildID)
  }
}


