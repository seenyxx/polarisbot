import { Client, Message, MessageAttachment } from "discord.js";
import { checkCoolDown, coolDownSetup, setCoolDown, simpleEmbed, replaceValue } from '../../lib';
import { BotCache } from '../../cache';
import nodeHtmlToImage from "node-html-to-image";

let coolDown = 5
let commandName = 'cactus'
export async function run(client: Client, message: Message, args: Array<string>) {
  if (coolDownSetup(message, commandName, coolDown)) return

  let embed = simpleEmbed('green', 'Cactus', '')
    .setImage('http://i.redd.it/8gfjs4i81nj61.jpg')
  message.channel.send(embed)
}