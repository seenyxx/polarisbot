import { Client, Message } from 'discord.js'
import {
  checkCoolDown,
  coolDownSetup,
  errorMessage,
  setCoolDown,
  simpleEmbed,
} from '../../util/lib'
import db from 'quick.db'

let coolDown = 10
let commandName = 'gf'
export function run(client: Client, message: Message, args: Array<string>) {
  if (coolDownSetup(message, commandName, coolDown)) return

  if (!message.guild) return
  if (!message.member?.hasPermission('MANAGE_MESSAGES'))
    return message.channel.send(errorMessage('Insufficient Permissions'))

  let status: boolean = false
  if (!message.guild?.id) return
  if (db.get(`gf.${message.guild.id}`)) {
    db.delete(`gf.${message.guild.id}`)
    status = false
  } else {
    db.set(`gf.${message.guild.id}`, true)
    status = true
  }

  message.channel.send(
    simpleEmbed('blue', 'Gif filter', status ? 'ON ✅' : 'OFF ❌')
  )
}
