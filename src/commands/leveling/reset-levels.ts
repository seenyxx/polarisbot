import { Client, GuildMember, Message } from 'discord.js';

import { Leveling } from '../../util/leveling';
import { coolDownSetup, errorMessage, simpleEmbed } from '../../util/lib';

let coolDown = 5
let commandName = 'gmulti'

export const aliases = ['clear-level', 'clear-levels', 'clear-rank', 'clear-lvl', 'clear-lvls', 'reset-lvl', 'reset-rank', 'reset-lvls', 'reset-levels', 'reset-level']

export async function run(client: Client, message: Message, args: Array<string>) {
  if (!message.member?.hasPermission('MANAGE_GUILD')) return message.channel.send(errorMessage('Insufficient permissions'))
  if (coolDownSetup(message, commandName, coolDown)) return
  if (!message.guild || !message.member) return
  let member = message.member
  if (message.mentions.members?.first()) member = message.mentions.members.first() as GuildMember


  const user = new Leveling(member.id, message.guild.id)
  
  if (!await user.getLevelingStatus()) return message.channel.send('Leveling is not enabled in this server')
  message.channel.send(`Are you sure you want to reset <@${member.id}>'s levels?\n\`y\`/\`n\``)
  message.channel.awaitMessages(m => m.author.id === message.member?.id, { max: 1, time: 30000}).then(messages => {
    if (messages.size > 0) {
      const msg = messages.first() as Message

      if (msg.content.trim() === 'y') {
        user.set(0)
        message.channel.send(simpleEmbed('blue', 'Reset Levels', `<@${member.id}>'s levels were reset by <@${message.author.id}>`))
      }
      
      if (msg.content.trim() === 'n') {
        message.channel.send(simpleEmbed('blue', 'Reset Cancelled', ''))
      }
    }

    if (messages.size < 1) {
      message.channel.send('You didn\'t answer in time.')
    }
  })
}
