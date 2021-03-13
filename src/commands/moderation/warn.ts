import { Client, Message } from 'discord.js';
import { coolDownSetup, errorMessage, simpleEmbed } from '../../util/lib';
import { WarnLogger } from '../../util/warns';

let coolDown = 3
let commandName = 'warn'

export const aliases = ['w']

export function run(client: Client, message: Message, args: Array<string>) {
  if (!message.member?.hasPermission('MANAGE_MESSAGES')) return message.channel.send(errorMessage('Insufficient permissions'))
  if (!message.guild) return message.channel.send(errorMessage('Use this in a guild'))
  if (coolDownSetup(message, commandName, coolDown)) return
  

  const mention = message.mentions.members?.first()
  
  if (!mention) return message.channel.send(errorMessage('Mention a member'))
  if (mention.user.bot) return
  
  args.shift()

  const reason = args[0] ? args.join(' ') : 'No reason provided'
  const logger = new WarnLogger(message.guild)

  logger.warn(message, message.member, mention, reason)
  
  message.channel.send(simpleEmbed('gold', `Warned`, ` <@${mention.id}> for: \`\`\`${reason}\`\`\``))
}