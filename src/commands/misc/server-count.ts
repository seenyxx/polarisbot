import { Client, Message, MessageAttachment } from "discord.js";
import { checkCoolDown, coolDownSetup, setCoolDown, simpleEmbed, replaceValue } from '../../lib';
import { BotCache } from '../../cache';
import nodeHtmlToImage from "node-html-to-image";

let coolDown = 3
let commandName = 'sc'
export async function run(client: Client, message: Message, args: Array<string>) {
  
  if (coolDownSetup(message, commandName, coolDown)) return
  message.channel.send(simpleEmbed('blue', 'Server count', `👑 Currently serving ${client.guilds.cache.size} servers`))
}