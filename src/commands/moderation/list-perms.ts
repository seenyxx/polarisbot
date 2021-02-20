import { Client, Message } from "discord.js";
import { checkCoolDown, coolDownSetup, errorMessage, setCoolDown, simpleEmbed } from "../../lib";

let coolDown = 3
let commandName = 'lp'
export function run(client: Client, message: Message, args: Array<string>) {
  
  if (coolDownSetup(message, commandName, coolDown)) return
  if (!message.member?.hasPermission('ADMINISTRATOR')) return message.channel.send(errorMessage('Insufficient Permissions'))
  let mention = message.mentions.members?.first()

  if (!mention) return message.channel.send(errorMessage('No one was mentioned'))

  
  let result = simpleEmbed('blue', 'List Permissions', `Server Wide\`\`\`yaml\n${JSON.stringify(mention.permissions)}\`\`\`\nThis Channel\`\`\`yaml\n${JSON.stringify(mention.permissionsIn(message.channel))}\`\`\``)
    .setAuthor(mention.user.tag, mention.user.displayAvatarURL())
  
  message.channel.send(result)
}