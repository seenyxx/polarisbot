import { Client, Message } from 'discord.js';

import { coolDownSetup, simpleEmbed } from '../../util/lib';
import { BotCache } from '../../util/cache';

let coolDown = 3
let commandName = 'eval'
export async function run(client: Client, message: Message, args: Array<string>) {
  const botCache = new BotCache()
  const owner = botCache.get('config').owner
  if (!owner || message.author.id !== owner) return
  if (coolDownSetup(message, commandName, coolDown)) return
  const exec = args.join(' ')

  const output = JSON.stringify(eval(exec))
  message.channel.send(output ? `\`\`\`json\n${output}\`\`\`` : 'No output')

}