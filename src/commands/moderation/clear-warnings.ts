import { error } from 'console';
import { Client, Message, MessageEmbed } from 'discord.js';
import { coolDownSetup, hardPunish, pollEmojis, errorMessage, pollEmojisResolvable, simpleEmbed } from '../../util/lib';
import { WarnLogger } from '../../util/warns';

let coolDown = 8
let commandName = 'cwarn'

export function run(client: Client, message: Message, args: Array<string>) {
  if (!message.member?.hasPermission('MANAGE_MESSAGES')) return message.channel.send(errorMessage('Insufficient permissions'))
  if (!message.guild) return message.channel.send(errorMessage('Use this in a guild'))
  if (coolDownSetup(message, commandName, coolDown)) return
  
  const mention = message.mentions.members?.first()

  if (!mention) return message.channel.send(errorMessage('Mention a member'))

  const logger = new WarnLogger(message.guild)

  logger.resetUserWarnings(message.member, mention)
  
  message.channel.send(simpleEmbed('green', `Cleared warnings for `, `<@${mention.id}>`))
}