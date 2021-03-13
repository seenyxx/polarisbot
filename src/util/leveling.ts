import db from 'quick.db';

export const xp = 20
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
  
  public add() {
    let multi = this.getGuildMulti()
    db.add(this.query,  xp * multi)
  }

  public setColor(color: string) {
    if (color === 'default') return db.delete(`colors.${this.userID}`)
    db.set(`colors.${this.userID}`, color.toLowerCase())
  }

  public getColor() {
    return db.get(`colors.${this.userID}`) ? db.get(`colors.${this.userID}`) : 'default'
  }

  public getGuild() {
    return db.get(`lvl${this.guildID}`)
  }

  public setGuildMulti(multi: number) {
    if (multi === 1) {
      db.delete(`lvlmulti.${this.guildID}`)
      return
    }
    db.set(`lvlmulti.${this.guildID}`, multi)
  }

  public getGuildMulti() {
    return db.get(`lvlmulti.${this.guildID}`) ? db.get(`lvlmulti.${this.guildID}`) : 1
  }

  public setLevelingStatus(status: boolean) {
    db.set(`lvlenabled.${this.guildID}`, status)
  }

  public getLevelingStatus() {
    return db.get(`lvlenabled.${this.guildID}`) ? db.get(`lvlenabled.${this.guildID}`) : false
  }
}




export function setCoolDown(userID: string, guildID: string) {
  db.set(`lvlcd${guildID}.${userID}`, Date.now() + 30000)
}

export function checkCoolDown(userID: string, guildID: string) {
  const cd = db.get(`lvlcd${guildID}.${userID}`) ? db.get(`lvlcd${guildID}.${userID}`) : 0
  const now = Date.now()

  if (cd > now) return true
  else return false
}


export function lvlSetup(userID: string, guildID: string) {
  const lvl = new Leveling(userID, guildID)

  if (!lvl.getLevelingStatus()) return

  if (!checkCoolDown(userID, guildID)) {

    lvl.add()

    setCoolDown(userID, guildID)
  }
}


