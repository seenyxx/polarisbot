import { Client, Message } from "discord.js";
import figlet from "figlet";

export function run(client: Client, message: Message, args: Array<String>) {

  let text = args.join(' ')
  
  figlet(text, (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    
    message.channel.send(`\`\`\`css\n${data}\n\`\`\``)
  })
}