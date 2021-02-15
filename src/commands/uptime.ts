import { Client, Message, MessageEmbed } from "discord.js";
import { parseDisplayUptime } from "../lib";

export function run(client: Client, message: Message, args: Array<String>) {
  let uptime = parseDisplayUptime(process.uptime())
  let uptimeEmbed = new MessageEmbed()
    .setColor('#00FF7F')
    .setTitle('**Uptime**')
    .setDescription(`\`\`\`yaml\n${uptime[0]}\`\`\`\n\`\`\`css\n${uptime[1]}\`\`\``)

  message.channel.send(uptimeEmbed).catch(console.error)
}