import { Client, Message, MessageEmbed } from "discord.js";
import { readFileSync } from "fs";
import { BotCache } from "../../cache";
import { coolDownSetup, errorMessage, simpleEmbed } from "../../lib";
import db from 'quick.db'


let coolDown = 120
let commandName = 'lockdown'
export function run(client: Client, message: Message, args: Array<string>) {
  if (!message.member?.hasPermission('MANAGE_GUILD')) return message.channel.send(errorMessage('Insufficient permissions'))
  if (!db.get(`ld.${message.guild?.id}`)) return message.channel.send(errorMessage('There is no lockdown placed on this server'))
  message.channel.send(simpleEmbed('green','LOCKDOWN', 'The lockdown has been lifted'))
  
  db.delete(`ld.${message.guild?.id}`)
}