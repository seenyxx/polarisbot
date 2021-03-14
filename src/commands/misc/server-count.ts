import { Client, Message, MessageAttachment } from "discord.js";
import { checkCoolDown, coolDownSetup, setCoolDown, simpleEmbed, replaceValue } from '../../util/lib';
import { BotCache } from '../../util/cache';

let coolDown = 3
let commandName = 'sc'
export async function run(client: Client, message: Message, args: Array<string>) {
  if (coolDownSetup(message, commandName, coolDown)) return

  const count = (await client.shard?.fetchClientValues('guilds.cache.size'))?.reduce((acc, guild) => acc + guild, 0)
  
  message.channel.send(simpleEmbed('blue', 'Server count', `👑 Currently serving ${count} servers`))
}