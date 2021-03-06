import { Client, Message } from "discord.js";
import { BotCache } from "../../util/cache";
import { coolDownSetup, getPrefix, simpleEmbed } from "../../util/lib";


let coolDown = 3
let commandName = 'help'
export function run(client: Client, message: Message, args: Array<string>) {

  if (coolDownSetup(message, commandName, coolDown)) return

  let help = new BotCache().get('helpConfig')
  const helpEmbed = simpleEmbed('blue', '**Help**', '')
  if (!args[0]) {
    help.cat.forEach((cat: { name: string, menu: string}) => {
      helpEmbed.addField(cat.name, `\`${getPrefix(message.guild?.id)}help ${cat.menu}\``, true)
    })
    message.channel.send(helpEmbed).catch(console.error)
    return
  }

  let helpCat = args[0].trim()

  if (args[0]) {
    let menu = help[helpCat]

    if (!menu) return

    menu.forEach((data: any) => {
      helpEmbed.addField(data.name, data.value.replace('<prefix>', getPrefix(message.guild?.id)), true)
    })
  }


  message.channel.send(helpEmbed).catch(console.error)
}