import { Client, Message } from "discord.js";
import { simpleEmbed } from "../lib";

export function run(client: Client, message: Message, args: Array<String>) {
  message.channel?.send(simpleEmbed('blue', 'Ping', `💬 \`${Date.now() - message.createdTimestamp}ms\`\n 🌐 \`${client.ws.ping}ms\``))
}