import {
  Client,
  Message,
  MessageReaction,
  TextChannel,
  User,
  UserResolvable,
} from 'discord.js'
import { coolDownSetup, errorMessage, simpleEmbed } from '../../util/lib'

let coolDown = 8
let commandName = 'st'

export function run(client: Client, message: Message, args: Array<string>) {
  if (message.channel.type !== 'text')
    return message.channel.send(
      errorMessage('You can only use this in a text channel')
    )
  if (!message.member?.hasPermission('MANAGE_CHANNELS'))
    return message.channel.send(errorMessage('Insufficient Permissions'))
  if (coolDownSetup(message, commandName, coolDown)) return

  let topic = args.join(' ').trim()
  if (topic.length > 1024)
    return message.channel.send(errorMessage('Topic length is too big'))

  let channel = message.channel as TextChannel

  channel.setTopic(topic)

  message.channel.send(
    simpleEmbed('blue', 'Topic', 'Changed the channel topic')
  )
}
