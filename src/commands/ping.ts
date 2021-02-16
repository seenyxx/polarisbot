import { Client, Message } from "discord.js";
import { checkCoolDown, coolDownSetup, setCoolDown, simpleEmbed } from "../lib";

let coolDown = 3
let commandName = 'ping'
export function run(client: Client, message: Message, args: Array<string>) {
  
  if (coolDownSetup(message, commandName, coolDown)) return

  message.channel?.send(simpleEmbed('blue', 'Ping', `💬 \`${Date.now() - message.createdTimestamp}ms\`\n 🌐 \`${client.ws.ping}ms\``))
}