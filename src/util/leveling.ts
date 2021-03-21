import { GuildMember, Message } from 'discord.js';
import { Database } from 'quickmongo';
import { simpleEmbed } from './lib';
import { BotCache } from './cache';
import db from 'quick.db'

export const xp = 20
export const xpPerLevel = 1000

console.time('Connecting Database')
const mongodb = new Database(process.env.NODE_ENV === 'production' ? require('../../config.json').db : require('../../config-dev.json').db).createModel('leveling');

mongodb.on('ready', () => {
  console.log('MongoDB database connected') 
  console.timeEnd('Connecting Database')
})


export class Leveling {
  readonly userID
  readonly guildID
  private query
  constructor(userID: string, guildID: string) {
    this.userID = userID
    this.guildID = guildID
    this.query = `${this.guildID}.${userID}`
  }

  public async get(): Promise<number> {
    return await mongodb.get(this.query) ? await mongodb.get(this.query) : 0
  }

  public set(val: number) {
    mongodb.set(this.query, val)
  } 
  
  public async add(user?: GuildMember) {
    mongodb.add(this.query, await this.xpFormula() * (user && user?.premiumSince ? 1.2 : 1))
  }

  public async xpFormula() {
    let multi = await this.getGuildMulti()
    return xp * multi
  }

  public setColor(color: string) {
    if (color === 'default') return mongodb.delete(`colors.${this.userID}`)
    mongodb.set(`colors.${this.userID}`, color.toLowerCase())
  }

  public async getColor(): Promise<string> {
    return await mongodb.get(`colors.${this.userID}`) ? await mongodb.get(`colors.${this.userID}`) : 'default'
  }

  public async getGuild(): Promise<Record<string, number>> {
    const emptyObj: Record<string, number> = {}
    emptyObj[this.userID] = 0

    return await mongodb.get(`${this.guildID}`) ? await mongodb.get(`${this.guildID}`) : emptyObj
  }

  public setGuildMulti(multi: number) {
    if (multi === 1) {
      mongodb.delete(`multi.${this.guildID}`)
      return
    }
    mongodb.set(`multi.${this.guildID}`, multi)
  }

  public async getGuildMulti(): Promise<number> {
    return await mongodb.get(`multi.${this.guildID}`) ? await mongodb.get(`multi.${this.guildID}`) : 1
  }

  public setLevelingStatus(status: boolean) {
    mongodb.set(`enabled.${this.guildID}`, status)
  }

  public async getLevelingStatus(): Promise<boolean> {
    return await mongodb.get(`enabled.${this.guildID}`) ? await mongodb.get(`enabled.${this.guildID}`) : false
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

  if (!await lvl.getLevelingStatus()) return

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


