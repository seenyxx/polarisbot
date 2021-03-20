import { Client, Message } from 'discord.js';

import { Leveling } from '../../util/leveling';
import { coolDownSetup, errorMessage, simpleEmbed } from '../../util/lib';

let coolDown = 5
let commandName = 'smulti'

export const aliases = ['multi', 'set-multiplier', 'setmulti']

const numberRegex = /^\d*\.?\d*$/

export async function run(client: Client, message: Message, args: Array<string>) {
  if (!message.member?.hasPermission('MANAGE_GUILD')) return message.channel.send(errorMessage('Insufficient permissions'))

  if (coolDownSetup(message, commandName, coolDown)) return
  if (!args[0]) return
  if (!message.guild || !message.member) return
  const multi = args[0].trim()
  const guild = new Leveling(message.member.id, message.guild.id)

  if (!await guild.getLevelingStatus()) return message.channel.send('Leveling is not enabled in this server')

  if (!multi.match(numberRegex)) return message.channel.send(errorMessage('Invalid number'))
  if (parseFloat(multi) > 8) return message.channel.send(errorMessage('Multi is too high, the max multi is 8'))
  guild.setGuildMulti(parseFloat(multi))

  message.channel.send(simpleEmbed('blue', 'Set Multiplier', `Set multiplier to \`${multi}\``))
}
