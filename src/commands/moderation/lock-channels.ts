import { Client, Message } from 'discord.js'
import {
  coolDownSetup,
  hardPunish,
  errorMessage,
  simpleEmbed,
} from '../../util/lib'
import { PersistentCacheConnection } from '../../util/persistentCache'

let coolDown = 10
let commandName = 'lgc'
export let aliases = ['lock-c', 'lgc']

export function run(client: Client, message: Message, args: Array<string>) {
  if (!message.guild) return
  if (!message.member?.hasPermission('MANAGE_CHANNELS'))
    return message.channel.send(errorMessage('Insufficient Permissions'))
  if (coolDownSetup(message, commandName, coolDown)) return

  const cache = new PersistentCacheConnection(`cignores.${message.guild.id}`)

  cache.set('enabled', true)

  message.guild.channels.cache.forEach(c => {
    if (!message.guild) return
    if (
      c.isText() &&
      c.permissionsFor(message.guild.roles.everyone)?.serialize()
        .VIEW_CHANNEL === false
    ) {
      cache.set(c.id, true)
    } else if (
      c.isText() &&
      c.permissionsFor(message.guild.roles.everyone)?.serialize().VIEW_CHANNEL
    ) {
      c.createOverwrite(message.guild.roles.everyone, {
        SEND_MESSAGES: false,
      })
    }
  })

  message.channel.send(simpleEmbed('green', 'Locked all channels 🔒', ''))
}
