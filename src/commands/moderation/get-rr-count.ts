import { Client, Message } from 'discord.js'
import { coolDownSetup, errorMessage, simpleEmbed } from '../../util/lib'
import { ReactionRoleCounter } from '../../util/rrManager'

let coolDown = 5
let commandName = 'rrc'

export const aliases = ['getrr', 'rrcount', 'rr-count']

export function run(client: Client, message: Message, args: Array<string>) {
  if (!message.guild)
    return message.channel.send(
      errorMessage('This command is only avalible in a server')
    )
  if (!message.member?.hasPermission('MANAGE_ROLES'))
    return message.channel.send(errorMessage('Insufficient permissions'))
  if (coolDownSetup(message, commandName, coolDown)) return

  const counter = new ReactionRoleCounter()

  message.channel.send(
    simpleEmbed(
      'green',
      'Reaction Role Count',
      `${counter.getRRCount(message.guild.id)}/100`
    )
  )
}
