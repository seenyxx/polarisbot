import { Client, Message } from 'discord.js'

import { Leveling } from '../../util/leveling'
import { coolDownSetup, errorMessage, simpleEmbed } from '../../util/lib'

let coolDown = 30
let commandName = 'togglelvl'

export const aliases = [
  'toggle-level',
  'toggle-levels',
  'toggle-lvl',
  'toggle-lvls',
  'toggleleveling',
  'togglelevels',
  'togglelevel',
]

export async function run(
  client: Client,
  message: Message,
  args: Array<string>
) {
  if (!message.member?.hasPermission('MANAGE_GUILD'))
    return message.channel.send(errorMessage('Insufficient permissions'))

  if (coolDownSetup(message, commandName, coolDown)) return
  if (!message.guild || !message.member) return

  const guild = new Leveling(message.member.id, message.guild.id)

  if (await guild.getLevelingStatus()) {
    guild.setLevelingStatus(false)
    message.channel.send(simpleEmbed('blue', 'Leveling 🏆', 'Disabled ❌'))
  } else {
    guild.setLevelingStatus(true)
    message.channel.send(simpleEmbed('blue', 'Leveling 🏆', 'Enabled ✅'))
  }
}
