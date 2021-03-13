import { Client, Message } from 'discord.js';

import { coolDownSetup, simpleEmbed } from '../../util/lib';

let coolDown = 3
let commandName = 'ping'
export async function run(client: Client, message: Message, args: Array<string>) {
  
  if (coolDownSetup(message, commandName, coolDown)) return
  message.channel.send(simpleEmbed('BLURPLE', `Latency 📡`, `💬 ${Date.now() - message.createdTimestamp}ms\n🌐 ${client.ws.ping}ms`))
}