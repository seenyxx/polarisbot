import { Client, Message } from "discord.js";
import figlet from "figlet";

export function run(client: Client, message: Message, args: Array<String>) {
  args.shift()

  let text = args.join(' ')
  console.log(text)
  figlet(text, (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(data)
    message.channel.send(`\`\`\`\n${data}\n\`\`\``)
  })
}