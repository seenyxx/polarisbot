import { Client, Message, MessageEmbed } from "discord.js";

export function run(client: Client, message: Message, args: Array<String>) {
  let inviteEmbed = new MessageEmbed()
    .setColor('#fcba03')
    .setTitle('**Invite URL**')
    .setDescription('[**`[Invite Here]`**](https://discord.com/api/oauth2/authorize?client_id=808170326533996544&permissions=66321471&scope=bot)')
  message.channel?.send(inviteEmbed)
}