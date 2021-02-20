import { Client, Message } from "discord.js";
import { checkCoolDown, coolDownSetup, setCoolDown, simpleEmbed } from "../../lib";
import db from 'quick.db'
import { BotCache } from "../../cache";


let coolDown = 3
let commandName = 'prefix'
export function run(client: Client, message: Message, args: Array<string>) {
  
  if (coolDownSetup(message, commandName, coolDown)) return

  let prefix = db.get(`prefix.${message.guild?.id}`) ? db.get(`prefix.${message.guild?.id}`) : new BotCache().get('config').prefix
  
  return message.channel.send(simpleEmbed('blue', 'Server Prefix', `\`${prefix}\``))
}