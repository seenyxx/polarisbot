import { Client, Message } from 'discord.js';

import { Leveling } from '../../util/leveling';
import { coolDownSetup, errorMessage, simpleEmbed } from '../../util/lib';

let coolDown = 5
let commandName = 'lsc'

export const aliases = ['set-colour', 'sc', 'lvl-color', 'lvl-colour']

const colorRegex = /(^#([0-9a-f]{6})$|default)/i

export function run(client: Client, message: Message, args: Array<string>) {
  if (coolDownSetup(message, commandName, coolDown)) return
  if (!args[0]) return
  if (!message.guild || !message.member) return
  let color = args[0].trim()
  const user = new Leveling(message.member.id, message.guild.id)

  if (!user.getLevelingStatus()) return message.channel.send('Leveling is not enabled in this server')

  if (!color.match(colorRegex)) return message.channel.send(errorMessage('Invalid hex color'))
  
  user.setColor(color)

  message.channel.send(simpleEmbed(color, 'Set Color', `Set color to \`${color}\``))
}
