import { Guild, Message, TextChannel, MessageEmbed, GuildMember } from 'discord.js';
import db from 'quick.db';
import { simpleEmbed } from './lib';

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
      .setDescription(`Offender: <@${user.id}>\nIssued by: <@${author.id}>\nReason:\n\`\`\`${reason}\`\`\``)
      .setFooter(msg.url)
    return embed
  }

  public async warn(msg: Message, author: GuildMember, user: GuildMember, reason: string) {
    let id = db.get(`log.${this.guild.id}`)

    db.add(`warns.${this.guild.id}.${user.id}`, 1)

    let userWarns = db.get(`warns.${this.guild.id}.${user.id}`)
    let channel = this.guild.channels.cache.get(id)

    if (!channel || channel.isText() === false) return

    const logs = channel as TextChannel
  
    logs.send(this.logEmbed(msg, author, userWarns, user, reason.trim()))

    user.createDM(true).then(dm => {
      dm.send(simpleEmbed('gold', `You were warned in ${user.guild.name} | Case: ${userWarns}`, `You were warned for:\n\`\`\`${reason}\`\`\``))
    })
  }

  public setWarnChannel(msg: Message, id: string) {
    let channel = this.guild.channels.cache.get(id)

    if (!channel || channel?.isText() == false) return

    db.set(`log.${this.guild.id}`, channel.id)
    
    msg.channel.send(simpleEmbed('green', 'Updated Warn Log channel', '')).catch(e => sendE(msg, e))
  }
  
  public resetUserWarnings(msg: Message, author: GuildMember, targetUser: GuildMember) {
    let id = db.get(`log.${this.guild.id}`)


    db.delete(`warns.${this.guild.id}.${targetUser.id}`)

    let channel = this.guild.channels.cache.get(id)

    if (!channel || channel.isText() === false) return

    let logs = channel as TextChannel
    let embed = new MessageEmbed()
      .setColor('#00FF7F')
      .setAuthor(`${targetUser.user.tag} | ${targetUser.id}`, targetUser.user.displayAvatarURL())
      .setTitle(`Reset Warnings`)
      .setDescription(`Reset warnings for: <@${targetUser.id}>\nReset issued by <@${author.id}>`)
      .setFooter(msg.url)
    logs.send(embed)
  }

  public resetAllWarnings() {
    db.delete(`warns.${this.guild.id}`)
  }
}

function sendE(msg: Message, e: any) {
  msg.channel.send(e)
}