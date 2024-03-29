import { Client, Message } from 'discord.js'
import db from 'quick.db'
import { coolDownSetup, errorMessage, simpleEmbed } from '../../util/lib'

let coolDown = 10
let commandName = 'captcha'
export async function run(
  client: Client,
  message: Message,
  args: Array<string>
) {
  if (coolDownSetup(message, commandName, coolDown)) return

  if (!message.guild) return
  if (!message.member?.hasPermission('MANAGE_GUILD'))
    return message.channel.send(errorMessage('Insufficient Permissions'))

  let status: boolean = false
  if (!message.guild?.id) return
  if (await db.get(`captcha.${message.guild.id}`)) {
    db.delete(`captcha.${message.guild.id}`)
    status = false
  } else {
    db.set(`captcha.${message.guild.id}`, true)
    status = true
  }

  message.channel.send(
    simpleEmbed('blue', 'Server Captcha', status ? 'ON ✅' : 'OFF ❌')
  )
}
