import {
  Client,
  Message,
  MessageReaction,
  TextChannel,
  User,
  UserResolvable,
} from 'discord.js'
import { coolDownSetup, errorMessage, simpleEmbed } from '../../util/lib'

let coolDown = 12
let commandName = 'ec'

export function run(client: Client, message: Message, args: Array<string>) {
  if (coolDownSetup(message, commandName, coolDown)) return

  let ereg = /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g

  let channel = message.channel as TextChannel
  if (message.channel.type == 'dm')
    return message.channel.send(
      errorMessage('Use this in a news or text channel')
    )
  if (!message.member?.hasPermission('MANAGE_CHANNELS'))
    return message.channel.send(errorMessage('Invalid Permissions'))

  if (!args[0]) return message.channel.send(errorMessage('No emoji provided'))

  if (!args[0].trim().match(ereg))
    return message.channel.send(errorMessage('Invalid emoji'))

  if (channel.name.match(ereg)) {
    let newName = channel.name.replace(ereg, args[0])
    channel.setName(newName)
    message.channel.send(
      simpleEmbed('green', 'Emojify Channel', 'Finished changing the channel')
    )
    return
  }

  channel
    .setName(`${args[0]}︱${channel.name}`)
    .catch(e =>
      message.channel.send(errorMessage('This channel is already emojified'))
    )
  message.channel.send(
    simpleEmbed('green', 'Emojify Channel', 'Finished emojifying channel')
  )
}
