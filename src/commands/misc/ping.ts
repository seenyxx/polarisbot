import { Client, Message, MessageAttachment } from "discord.js";
import { checkCoolDown, coolDownSetup, setCoolDown, simpleEmbed, replaceValue } from '../../lib';
import { BotCache } from '../../cache';
import nodeHtmlToImage from "node-html-to-image";

let coolDown = 3
let commandName = 'ping'
export async function run(client: Client, message: Message, args: Array<string>) {
  
  if (coolDownSetup(message, commandName, coolDown)) return
  let display = new BotCache().get('pingDisplay')
  let output = await nodeHtmlToImage({
    html: display,
    quality: 100,
    type: 'jpeg',
    encoding: 'binary',
    puppeteerArgs: {
      args: ['--no-sandbox'],
    },
    content: { message_ping: `Message Delay: ${Date.now() - message.createdTimestamp}ms`, ws_ping: `Websocket Delay: ${client.ws.ping}ms`}
  }) as Buffer

  message.channel.send(new MessageAttachment(output))
}