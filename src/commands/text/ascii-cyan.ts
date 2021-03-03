import { Client, Message } from "discord.js";
import figlet from "figlet";
import { coolDownSetup, simpleEmbed } from "../../lib";

let coolDown = 25
let commandName = 'ascii'

export function run(client: Client, message: Message, args: Array<string>) {
  if (coolDownSetup(message, commandName, coolDown)) return
  
  let text = args.join(' ')
  
  figlet(text, (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    
    message.channel.send(simpleEmbed('RANDOM', 'ASCII', `\`\`\`yaml\n${data}\n\`\`\``))
  })
}