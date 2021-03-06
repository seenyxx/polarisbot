import { Client, Message } from "discord.js";
import { coolDownSetup, errorMessage, getPrefix, simpleEmbed } from "../../util/lib";


let coolDown = 3
let commandName = 'prefix'
export function run(client: Client, message: Message, args: Array<string>) {
  if (!message.guild) return errorMessage('Use this in a server')  
  if (coolDownSetup(message, commandName, coolDown)) return

  let prefix = getPrefix(message.guild.id)
  return message.channel.send(simpleEmbed('blue', 'Server Prefix', `\`${prefix}\``))
}