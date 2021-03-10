import { error } from 'console';
import { Client, Guild, Message, MessageEmbed } from 'discord.js';
import { coolDownSetup, hardPunish, pollEmojis, errorMessage, pollEmojisResolvable, simpleEmbed } from '../../util/lib';
import { WarnLogger } from '../../util/warns';

let coolDown = 10
let commandName = 'swarn'

export function run(client: Client, message: Message, args: Array<string>) {
  if (!message.member?.hasPermission('MANAGE_MESSAGES')) return message.channel.send(errorMessage('Insufficient permissions'))
  if (!message.guild) return message.channel.send(errorMessage('Use this in a guild'))
  if (coolDownSetup(message, commandName, coolDown)) return
  
  const log = new WarnLogger(message.guild)

  log.setWarnChannel(message, message.channel.id)
}