import { error } from 'console';
import { Client, Message, MessageEmbed } from 'discord.js';
import { coolDownSetup, hardPunish, pollEmojis, errorMessage, pollEmojisResolvable } from '../../lib';

let coolDown = 60
let commandName = 'reaction-role'

export async function run(client: Client, message: Message, args: Array<string>) {

  if (!message.guild) return errorMessage('This command is only avalible in a server')
  if (!message.member?.hasPermission('MANAGE_ROLES')) return errorMessage('Insufficient permissions')

  if (coolDownSetup(message, commandName, coolDown)) return

  const filter = (m: Message) => m.author.id === message.author.id

  // Channel of the message
  let msgs = await message.channel.awaitMessages(filter)
  if (!msgs) return
  
  let channel = msgs.first()?.mentions.channels
  if (!channel) return errorMessage('No channel provided')

  console.log(channel)
  
}