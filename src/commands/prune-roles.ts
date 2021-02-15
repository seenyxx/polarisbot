import { RSA_PKCS1_OAEP_PADDING } from "constants";
import { Client, Message } from "discord.js";
import { simpleEmbed } from "../lib";

async function loopRoles(message: Message) {
  message.guild?.roles.cache.forEach(role => {
    if (role.name.search(/new role/g) > -1 ) {
      role.delete().catch(e => message.channel.send(simpleEmbed('red','Error',`An error occured when deleting <@&${role.id}> \`\`\`${e}\`\`\``)))
    }
  })
}

export function run(client: Client, message: Message, args: Array<String>) {
  if (!message.member?.hasPermission('MANAGE_ROLES')) return message.channel.send('You do not have permission to do that')
  

  loopRoles(message).then(() => {
    message.channel.send(simpleEmbed('green', '**Finished pruning roles**', ''))
  }).catch(console.error)
}