import { Client, Guild, Message } from "discord.js";
import { WarnLogger } from "../../util/guildlogs";
import { coolDownSetup, simpleEmbed } from "../../util/lib";
import { muteRole, updateMuteRolePerms } from "../../util/mute";

const commandName = 'unmute'
const coolDown = 3

export const aliases = ['um']

export async function run(client: Client, message: Message, args: Array<string>) {
  if (coolDownSetup(message, commandName, coolDown)) return
  if (!message.member?.hasPermission('MANAGE_ROLES')) return message.channel.send('Insufficient Permissions')
  if (!message.mentions.members || !message.guild) return


  const user = message.mentions.members.first()
  
  if (!user) return
  
  const mRole = await muteRole(user.guild)
  if (!user.roles.cache.find(r => r.id === mRole.id)) return message.channel.send('This member is not muted')

  updateMuteRolePerms(user.guild)
  
  user?.roles.remove(await muteRole(user.guild))

  const logger = new WarnLogger(message.guild)
  
  args.shift()
  const reason = args[0] ? args.join(' ') : 'No reason provided'

  logger.logMute(message, user, 'unmute', message.member, reason)

  message.channel.send(simpleEmbed('green', 'Unmuted User', `Unmuted: <@${user.id}>\nIssued by: <@s${message.author.id}>`))
}

