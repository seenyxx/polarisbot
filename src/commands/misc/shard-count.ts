import { Client, Message } from 'discord.js';

import { coolDownSetup, simpleEmbed } from '../../util/lib';

let coolDown = 3
let commandName = 'shardcount'
export async function run(client: Client, message: Message, args: Array<string>) {
  
  if (coolDownSetup(message, commandName, coolDown)) return
  message.channel.send(simpleEmbed('blue', `Shard Count 🤖`, `There are currently \`${client.shard?.count}\` shards running`))
}