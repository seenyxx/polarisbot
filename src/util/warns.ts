import { Guild, Message, TextChannel, MessageEmbed, GuildMember, Webhook, Client } from 'discord.js';
import { Database } from 'quickmongo';
import { simpleEmbed } from './lib';

const db = new Database(process.env.NODE_ENV === 'production' ? require('../../config.json').db : require('../../config-dev.json').db);

export class WarnLogger {
  public guild: Guild

  constructor(guild: Guild) {
    this.guild = guild
  }

  private logEmbed(msg: Message, author: GuildMember, number: number, user: GuildMember, reason: string) {
    let embed = new MessageEmbed()
      .setColor('#ff9900')
      .setAuthor(`${user.user.tag} | ${user.id}`, user.user.displayAvatarURL())
      .setTitle(`Warning | Case: ${number}`)
      .setDescription(`Offender: <@${user.id}>\nIssued by: <@${author.id}>\nReason:\n\`\`\`${reason}\`\`\`\n[\`[Message Link]\`](${msg.url})`)

    return embed
  }

  public async warn(msg: Message, author: GuildMember, user: GuildMember, reason: string) {
    let id = await db.get(`log.${this.guild.id}`)

    await db.add(`warns_${this.guild.id}.${user.id}`, 1)

    let userWarns = await db.get(`warns_${this.guild.id}.${user.id}`)
    let channel = (await this.guild.fetchWebhooks()).find(wh => wh.id === id)

    if (!channel) return

    const logs = channel as Webhook
  
    logs.send(this.logEmbed(msg, author, userWarns, user, reason.trim()))

    user.createDM(true).then(dm => {
      dm.send(simpleEmbed('gold', `You were warned in ${user.guild.name} | Case: ${userWarns}`, `You were warned for:\n\`\`\`${reason}\`\`\``))
    })
  }

  public async setWarnChannel(msg: Message, id: string) {
    let channel = this.guild.channels.cache.get(id) as TextChannel | undefined

    if (!channel || !this.guild.me) return
    let dbID = await db.get(`log.${this.guild.id}`)
    let wh = (await channel.fetchWebhooks()).find(wh => wh.id === dbID)
    let possibleGuildWH = (await channel.fetchWebhooks()).find(wh => wh.id === dbID)
    
    if (possibleGuildWH && possibleGuildWH.channelID !== id) {
      possibleGuildWH.delete()
    }

    if (wh) {
      db.set(`log.${this.guild.id}`, wh.id)
      
    }
    if (!wh) {
      channel.createWebhook(this.guild.me.displayName, {
        avatar: this.guild.me.user.displayAvatarURL()
      }).then(wh => {
        db.set(`log.${this.guild.id}`, wh.id)

      })
      return msg.channel.send(simpleEmbed('green', 'Updated Warn Log channel', '')).catch(e => sendE(msg, e))
    }
  }
  
  public async resetUserWarnings(msg: Message, author: GuildMember, targetUser: GuildMember) {
    let id = await db.get(`log.${this.guild.id}`)


    db.delete(`warns_${this.guild.id}.${targetUser.id}`)

    let channel = (await this.guild.fetchWebhooks()).find(wh => wh.id === id)

    if (!channel) return

    let logs = channel as Webhook
    let embed = new MessageEmbed()
      .setColor('#00FF7F')
      .setAuthor(`${targetUser.user.tag} | ${targetUser.id}`, targetUser.user.displayAvatarURL())
      .setTitle(`Reset Warnings`)
      .setDescription(`Reset warnings for: <@${targetUser.id}>\nReset issued by <@${author.id}>\n[\`[Message Link]\`](${msg.url})`)
    logs.send(embed)
  }

  public resetAllWarnings() {
    db.delete(`warns_${this.guild.id}`)
  }
}

function sendE(msg: Message, e: any) {
  msg.channel.send(e)
}