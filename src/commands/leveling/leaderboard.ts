import { Client, Message } from 'discord.js';
import db from 'quick.db';

import { BotCache } from '../../util/cache';
import { coolDownSetup, errorMessage, simpleEmbed } from '../../util/lib';


let coolDown = 8
let commandName = 'lb'

export const aliases = ['lb']

export function run(client: Client, message: Message, args: Array<string>) {
  if (coolDownSetup(message, commandName, coolDown)) return
  
  if (!message.guild) return
  if (!message.member?.hasPermission('MANAGE_GUILD')) return message.channel.send(errorMessage('Insufficient Permissions'))
  if (!args[0]) return message.channel.send(errorMessage('No prefix provided'))
  let newPrefix = args[0].trim()
  
  db.set(`prefix.${message.guild.id}`, newPrefix)

  if (newPrefix == new BotCache().get('config').prefix) db.delete(`prefix.${message.guild.id}`)

  message.channel.send(simpleEmbed('blue', 'Server Prefix', `Set prefix to \`${newPrefix}\``))
  
}