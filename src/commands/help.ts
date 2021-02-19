import { Client, Message, MessageEmbed } from "discord.js";
import { readFileSync } from "fs";
import { BotCache } from "../cache";
import { coolDownSetup, simpleEmbed } from "../lib";


let coolDown = 5
let commandName = 'help'
export function run(client: Client, message: Message, args: Array<string>) {

  if (coolDownSetup(message, commandName, coolDown)) return

  let help = new BotCache().get('helpConfig')
  const helpEmbed = simpleEmbed('blue', '**Help**', '')
  if (!args[0]) {
    help.cat.forEach((cat: { name: string, menu: string}) => {
      helpEmbed.addField(cat.name, `\`<prefix>help ${cat.menu}\``)
    })
    message.channel.send(helpEmbed).catch(console.error)
    return
  }

  let helpCat = args[0].trim()

  if (args[0]) {
    let menu = help[helpCat]

    if (!menu) return

    helpEmbed.addFields(menu)
  }


  message.channel.send(helpEmbed).catch(console.error)
}