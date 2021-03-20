import { GuildMember, Message } from 'discord.js';
import { Database } from 'quickmongo';
import { simpleEmbed } from './lib';
import { BotCache } from './cache';

export const xp = 20
export const xpPerLevel = 1000

const db = new Database(require('../../config.json').db);

db.on('ready', () => console.log('MongoDB database connected'))
export class Leveling {
  readonly userID
  readonly guildID
  private query
  constructor(userID: string, guildID: string) {
    this.userID = userID
    this.guildID = guildID
    this.query = `lvl${this.guildID}.${userID}`
  }

  public async get(): Promise<number> {
    return await db.get(this.query) ? await db.get(this.query) : 0
  }

  public set(val: number) {
    db.set(this.query, val)
  } 
  
  public async add(user?: GuildMember) {
    db.add(this.query, await this.xpFormula() * (user && user?.premiumSince ? 1.2 : 1))
  }

  public async xpFormula() {
    let multi = await this.getGuildMulti()
    return xp * multi
  }

  public setColor(color: string) {
    if (color === 'default') return db.delete(`colors.${this.userID}`)
    db.set(`colors.${this.userID}`, color.toLowerCase())
  }

  public async getColor(): Promise<string> {
    return await db.get(`colors.${this.userID}`) ? await db.get(`colors.${this.userID}`) : 'default'
  }

  public async getGuild(): Promise<Record<string, number>> {
    return await db.get(`lvl${this.guildID}`)
  }

  public setGuildMulti(multi: number) {
    if (multi === 1) {
      db.delete(`lvlmulti.${this.guildID}`)
      return
    }
    db.set(`lvlmulti.${this.guildID}`, multi)
  }

  public async getGuildMulti(): Promise<number> {
    return await db.get(`lvlmulti.${this.guildID}`) ? await db.get(`lvlmulti.${this.guildID}`) : 1
  }

  public setLevelingStatus(status: boolean) {
    db.set(`lvlenabled.${this.guildID}`, status)
  }

  public async getLevelingStatus(): Promise<boolean> {
    return await db.get(`lvlenabled.${this.guildID}`) ? await db.get(`lvlenabled.${this.guildID}`) : false
  }
}




export function setCoolDown(userID: string, guildID: string) {
  db.set(`lvlcd${guildID}.${userID}`, Date.now() + 45000)
}

export function checkCoolDown(userID: string, guildID: string) {
  const cd = db.get(`lvlcd${guildID}.${userID}`) ? db.get(`lvlcd${guildID}.${userID}`) : 0
  const now = Date.now()

  if (cd > now) return true
  else return false
}


export async function lvlSetup(msg: Message, user: GuildMember, guildID: string) {
  const lvl = new Leveling(user.id, guildID)

  if (!lvl.getLevelingStatus()) return

  if (!checkCoolDown(user.id, guildID)) {
    let currentLevel = Math.floor(await lvl.get() / 1000)
    let nextLevel = Math.floor((await lvl.get() + await lvl.xpFormula()) / 1000)

    if (nextLevel > currentLevel) {
      msg.channel.send(simpleEmbed(user.displayHexColor && user.displayHexColor !== '#000000' ? user.displayHexColor : 'blue' , '', `<@${user.id}> has reached level **${nextLevel + 1}**!`))
    }

    lvl.add(user)

    setCoolDown(user.id, guildID)
  }
}


