import { error } from 'console';
import { Client, Message, MessageEmbed } from 'discord.js';
import { coolDownSetup, hardPunish, pollEmojis, errorMessage, pollEmojisResolvable } from '../../util/lib';

let coolDown = 10
let commandName = 'warn'

export function run(client: Client, message: Message, args: Array<string>) {
  if (!message.member?.hasPermission('MANAGE_MESSAGES')) return message.channel.send(errorMessage('Insufficient permissions'))
  if (coolDownSetup(message, commandName, coolDown)) return

  
}