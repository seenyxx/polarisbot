import { Client, Message } from "discord.js";

export function run(client: Client, message: Message, args: Array<String>) {
  message.channel?.send(`Pong! ${client.ws.ping}ms`)
}