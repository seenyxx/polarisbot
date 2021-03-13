import { Client, Message } from 'discord.js';

import { coolDownSetup, simpleEmbed } from '../../util/lib';
import { Leveling } from '../../util/leveling';


let coolDown = 8
let commandName = 'lb'

export const aliases = ['lb']

export function run(client: Client, message: Message, args: Array<string>) {
  if (!message.guild || !message.member) return
  if (coolDownSetup(message, commandName, coolDown)) return
  
  const guild = new Leveling(message.member.id, message.guild.id)
  if (!guild.getLevelingStatus()) return message.channel.send('Leveling is not enabled in this server')
  const users: Record<string, number> = guild.getGuild()

  if (users) {
    const sortable = Object.fromEntries(
      Object.entries(users).sort(([, a], [, b]) => b - a).slice(0, 10)
    )
    const embed = simpleEmbed('gold', `${message.guild.name} Leaderboard`, '')
    let text = ''
    Object.entries(sortable).forEach((user, index) => {
      let badge: string | undefined
      switch(index) {
        case 0:
          badge = '🥇'
          break
        case 1:
          badge = '🥈'
          break
        case 2:
          badge = '🥉'
          break
      }
      text = text.concat(`\n ${badge ? `${badge}${index + 1}`: `:white_small_square:${index + 1}`} <@${user[0]}> **LVL:** \`${Math.floor(user[1] / 1000)}\` **XP:**\`${user[1] % 1000}/1000\` **Total XP:** \`${user[1] > 1000 ? `${user[1] / 1000}k` : user[1]}\``)
    })

    embed.setDescription(text)
    message.channel.send(embed)
  }
}