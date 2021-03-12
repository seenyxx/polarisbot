import { Client, Message } from 'discord.js';

import { coolDownSetup, errorMessage, simpleEmbed } from '../../util/lib';
import { Leveling } from '../../util/leveling';

let coolDown = 5
let commandName = 'lsc'

export const aliases = ['set-colour', 'sc', 'lvl-color', 'lvl-colour']

const colorRegex = /^#([0-9a-f]{6})$/i

export function run(client: Client, message: Message, args: Array<string>) {
  if (coolDownSetup(message, commandName, coolDown)) return
  
  if (!message.guild || !message.member) return
  const color = args[0].trim()
  const user = new Leveling(message.member.id, message.guild.id)

  if (!color.match(colorRegex)) return message.channel.send(errorMessage('Invalid hex color'))

  user.setColor(color)

  message.channel.send(simpleEmbed('blue', 'Set Color', `Set color to \`${color}\``))
}
