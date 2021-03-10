import { Guild, Message, TextChannel, MessageEmbed, GuildMember } from 'discord.js';
import db from 'quick.db';
import { simpleEmbed } from './lib';

export class WarnLogger {
  public guild: Guild

  constructor(guild: Guild) {
    this.guild = guild
  }

  private logEmbed(author: GuildMember, number: number, user: GuildMember, reason: string) {
    let embed = new MessageEmbed()
      .setColor('#ff9900')
      .setAuthor(`${user.user.tag} | ${user.id}`, user.user.displayAvatarURL())
      .setTitle(`Warning | Case: ${number}`)
      .setDescription(`Issued by: <@${author.id}> Reason:\n\`\`\`${reason}\`\`\``)

    return embed
  }

  public async warn(author: GuildMember, user: GuildMember, reason: string) {
    let id = db.get(`log.${this.guild.id}`)

    db.add(`warns.${this.guild.id}.${user.id}`, 1)

    let userWarns = db.get(`warns.${this.guild.id}.${user.id}`)
    let channel = this.guild.channels.cache.get(id)

    if (!channel || channel.isText() === false) return

    const logs = channel as TextChannel
  
    logs.send(this.logEmbed(author, userWarns, user, reason.trim()))

    user.createDM(true).then(dm => {
      dm.send(`You were warned for:\n\`\`\`${reason}\`\`\``)
    })
  }

  public setWarnChannel(msg: Message, id: string) {
    let channel = this.guild.channels.cache.get(id)

    if (!channel || channel?.isText() == false) return

    db.set(`log.${this.guild.id}`, channel.id)
    
    msg.channel.send(simpleEmbed('green', 'Updated Warn Log channel', '')).catch(e => sendE(msg, e))
  }
  
  public resetUserWarnings(author: GuildMember, targetUser: GuildMember) {
    let id = db.get(`log.${this.guild.id}`)


    db.delete(`warns.${this.guild.id}.${targetUser.id}`)

    let channel = this.guild.channels.cache.get(id)

    if (!channel || channel.isText() === false) return

    let logs = channel as TextChannel
    let embed = new MessageEmbed()
      .setColor('#00FF7F')
      .setAuthor(`${targetUser.user.tag} | ${targetUser.id}`, targetUser.user.displayAvatarURL())
      .setTitle(`Reset Warnings`)
      .setDescription(`Reset issued by <@${author.id}>`)
    logs.send(embed)
  }

  public resetAllWarnings() {
    db.delete(`warns.${this.guild.id}`)
  }
}

function sendE(msg: Message, e: any) {
  msg.channel.send(e)
}