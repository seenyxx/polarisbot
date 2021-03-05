import { Client, Message, MessageAttachment } from "discord.js";
import { checkCoolDown, coolDownSetup, setCoolDown, simpleEmbed, replaceValue } from '../../lib';
import { BotCache } from '../../cache';

let coolDown = 3
let commandName = 'ping'
export async function run(client: Client, message: Message, args: Array<string>) {
  
  if (coolDownSetup(message, commandName, coolDown)) return
  message.channel.send(simpleEmbed('BLURPLE', `Latency 📡`, `💬 ${Date.now() - message.createdTimestamp}\n🌐 ${client.ws.ping}ms`))
}