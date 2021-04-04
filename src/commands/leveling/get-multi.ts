import { Client, Message } from 'discord.js'

import { Leveling } from '../../util/leveling'
import { coolDownSetup, errorMessage, simpleEmbed } from '../../util/lib'

let coolDown = 5
let commandName = 'gmulti'

export const aliases = ['getmulti', 'get-multiplier']

const numberRegex = /^\d*\.?\d*$/

export async function run(
  client: Client,
  message: Message,
  args: Array<string>
) {
  if (coolDownSetup(message, commandName, coolDown)) return
  if (!message.guild || !message.member) return

  const guild = new Leveling(message.member.id, message.guild.id)

  if (!(await guild.getLevelingStatus()))
    return message.channel.send('Leveling is not enabled in this server')

  const multi = await guild.getGuildMulti()

  message.channel.send(
    simpleEmbed(
      'blue',
      'Get Multiplier',
      `The current multiplier is \`${multi}\``
    )
  )
}
