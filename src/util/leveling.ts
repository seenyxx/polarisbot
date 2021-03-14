import { GuildMember, Message } from 'discord.js';
import db from 'quick.db';
import { simpleEmbed } from './lib';

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
    db.add(this.query, this.xpFormula())
  }

  public xpFormula() {
    let multi = this.getGuildMulti()
    return xp * multi
  }

  public setColor(color: string) {
    if (color === 'default') return db.delete(`colors.${this.userID}`)
    db.set(`colors.${this.userID}`, color.toLowerCase())
  }

  public getColor() {
    return db.get(`colors.${this.userID}`) ? db.get(`colors.${this.userID}`) : 'default'
  }

  public getGuild(): Record<string, number> {
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
  db.set(`lvlcd${guildID}.${userID}`, Date.now() + 3000)
}

export function checkCoolDown(userID: string, guildID: string) {
  const cd = db.get(`lvlcd${guildID}.${userID}`) ? db.get(`lvlcd${guildID}.${userID}`) : 0
  const now = Date.now()

  if (cd > now) return true
  else return false
}


export function lvlSetup(msg: Message, user: GuildMember, guildID: string) {
  const lvl = new Leveling(user.id, guildID)

  if (!lvl.getLevelingStatus()) return

  if (!checkCoolDown(user.id, guildID)) {
    let currentLevel = Math.floor(lvl.get() / 1000)
    let nextLevel = Math.floor((lvl.get() + lvl.xpFormula()) / 1000)

    if (nextLevel > currentLevel) {
      msg.channel.send(simpleEmbed(user.displayHexColor && user.displayHexColor !== '#000000' ? user.displayHexColor : 'blue' , '', `<@${user.id}> has reached level **${nextLevel + 1}**!`))
    }

    lvl.add()

    setCoolDown(user.id, guildID)
  }
}


