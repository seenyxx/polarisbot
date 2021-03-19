import { Client, Message } from "discord.js";
import { runCaptcha } from "../../util/captcha";
import { coolDownSetup, hardPunish, errorMessage, simpleEmbed, unverifiedRole } from '../../util/lib';

let coolDown = 3
let commandName = 'kick'

export function run(client: Client, message: Message, args: Array<string>) {
  if (!message.guild || !message.member) return
  if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(errorMessage('Insufficient Permissions'))
  if (!message.mentions.members) return
  if (coolDownSetup(message, commandName, coolDown)) return
  
  const member = message.mentions.members.first()
  
  if (!member) return
  
  message.channel.send(simpleEmbed('pigeon', 'Attempting to ask for reverification..', ''))
  
  member.createDM().then(async dm => {
    await dm.send(simpleEmbed('blue', 'Type here within 10 minutes to start your verification process', ''))

    let unverifiedMemberRole = await unverifiedRole(member.guild)
    member.roles.add(unverifiedMemberRole)

    dm.awaitMessages(m => m, { max: 1, time: 600000}).then(ms => {
      if (ms.first()) {
        message.channel.send(simpleEmbed('green', 'User responded, asking to verify now..', ''))

        runCaptcha(member).catch(e => message.channel.send(simpleEmbed('blue', 'Failed verification', e)))
      }

      if (!ms) {
        message.channel.send(simpleEmbed('blue', 'User did not respond.', ''))
      }
    })
  })
}