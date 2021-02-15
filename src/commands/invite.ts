import { Client, Message, MessageEmbed } from "discord.js";
import { simpleEmbed } from "../lib";

export function run(client: Client, message: Message, args: Array<string>) {
  let inviteEmbed = simpleEmbed('gold','**Invite URL**', '[**`[Invite Here]`**](https://discord.com/api/oauth2/authorize?client_id=808170326533996544&permissions=66321471&scope=bot)')
  
  message.channel?.send(inviteEmbed)
}