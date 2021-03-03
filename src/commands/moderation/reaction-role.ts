import { error } from 'console';
import { Client, Message, MessageEmbed } from 'discord.js';
import { coolDownSetup, hardPunish, pollEmojis, errorMessage, pollEmojisResolvable } from '../../lib';

let coolDown = 5
let commandName = 'reaction-role'

export async function run(client: Client, message: Message, args: Array<string>) {

  if (!message.guild) return message.channel.send(errorMessage('This command is only avalible in a server'))
  if (!message.member?.hasPermission('MANAGE_ROLES')) return message.channel.send(errorMessage('Insufficient permissions'))

  if (coolDownSetup(message, commandName, coolDown)) return

  message.channel.send('Enter the channel you want this reaction role to be in')
  const filter = (m: Message) => m.author.id === message.author.id

  // Channel of the message
  let msgs = await message.channel.awaitMessages(filter, {max: 1, time: 30000, errors: ['time'] })
  if (!msgs) return
  
  
  let channel = msgs.first()?.mentions.channels?.first()
  if (!channel?.id) return message.channel.send(errorMessage('No channel provided or invalid channel'))

  const actualChannel = message.guild.channels.cache.get(channel.id)

  if (!actualChannel) return message.channel.send(errorMessage('Invalid channel'))
  if (!actualChannel.isText()) return message.channel.send(errorMessage('Invalid channel'))


  message.channel.send('Provide the embed color')

  let colorMsgs = await message.channel.awaitMessages(filter, {max: 1, time: 30000, errors: ['time'] })
  if (!colorMsgs) return

  let color = colorMsgs.first()?.content.trim()
  if (!color?.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i)?.length) return message.channel.send(errorMessage('No color provided or invalid color'))

  
  message.channel.send('Provide Title')

  let titleMsg = await message.channel.awaitMessages(filter, {max: 1, time: 30000, errors: ['time'] })
  if (!titleMsg) return 

  let title = titleMsg.first()
  if (!title) return message.channel.send(errorMessage('No title provided'))

  
}