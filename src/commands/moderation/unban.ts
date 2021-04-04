import { Client, Message, User } from 'discord.js'
import {
  coolDownSetup,
  hardPunish,
  errorMessage,
  simpleEmbed,
} from '../../util/lib'

let coolDown = 3
let commandName = 'unban'

export async function run(
  client: Client,
  message: Message,
  args: Array<string>
) {
  if (!message.member || !message.guild) return
  if (message.member.hasPermission('BAN_MEMBERS'))
    return message.channel.send(errorMessage('Insufficient Permissions'))
  if (coolDownSetup(message, commandName, coolDown)) return

  const userArg = args.join(' ').trim()
  if (!userArg) return message.channel.send(errorMessage('No user provided'))

  const bans = await message.guild.fetchBans()

  if (userArg.match(/[0-9]{17,100}/)) {
    const user = bans.find(b => b.user.tag === userArg)
    if (!user) return
    await message.guild.members.unban(user.user)
    message.channel.send(
      simpleEmbed(
        'green',
        'Unban',
        `Unbanned: <@${user.user.id}> | ${user.user.id}\nIssued by: <@${message.member.id}>`
      )
    )
  } else if (userArg.match(/(.*)#(\d{4})/)) {
    const user = bans.find(b => b.user.id === userArg)
    if (!user) return
    await message.guild.members.unban(user.user)
    message.channel.send(
      simpleEmbed(
        'green',
        'Unban',
        `Unbanned: <@${user.user.id}> | ${user.user.id}\nIssued by: <@${message.member.id}>`
      )
    )
  } else {
    message.channel.send(
      errorMessage('Invalid format: must be a user id or username#tag')
    )
  }
}
