import { Client, Message } from "discord.js";
import { coolDownSetup, hardPunish, errorMessage, simpleEmbed } from '../../util/lib';
import { PersistentCacheConnection } from '../../util/persistentCache';

let coolDown = 10
let commandName = 'ulgc'
export let aliases = ['unlock-c', 'ulgc']

export function run(client: Client, message: Message, args: Array<string>) {
  if (!message.guild) return
  if (!message.member?.hasPermission('MANAGE_CHANNELS')) return message.channel.send(errorMessage('Insufficient Permissions'))
  if (coolDownSetup(message, commandName, coolDown)) return
  
  const cache = new PersistentCacheConnection(`cignores.${message.guild.id}`)

  if (!cache.get('enabled')) return message.channel.send(errorMessage('This server is not locked'))

  message.guild.channels.cache.forEach(c => {
    if (!message.guild) return
    
    if (c.isText() && cache.get(c.id)) {
      cache.remove(c.id)
    }
    else if (c.isText()) {
      c.createOverwrite(message.guild.roles.everyone, {
        SEND_MESSAGES: true
      })
    }
  })

  message.channel.send(simpleEmbed('green', 'Unlocked all channels 🔓', '')).then(() => cache.removeAll())
}