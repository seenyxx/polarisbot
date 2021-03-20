import { Client, Message, MessageEmbed } from "discord.js";
import { readFileSync } from "fs";
import { BotCache } from "../../util/cache";
import { Help } from "../../util/helpTypes";
import { coolDownSetup, getPrefix, simpleEmbed } from '../../util/lib';


let coolDown = 2
let commandName = 'help'
export function run(client: Client, message: Message, args: Array<string>) {

  if (coolDownSetup(message, commandName, coolDown)) return

  let help = new BotCache().get('helpConfig') as Help
  const helpEmbed = simpleEmbed('blue', '**Help**', '')
  if (!args[0]) {
    help.categories.forEach((cat: { name: string, menu: string}) => {
      helpEmbed.addField(cat.name, `\`${getPrefix(message.guild?.id)}help ${cat.menu}\``, true)
    })
    message.channel.send(helpEmbed).catch(console.error)
    return
  }

  let helpArg = args[0].trim()

  if (args[0]) {
    let menu = help.categories.find(el => el.menu == helpArg)


    // console.log(menu)

    if (menu) {
      message.channel.send(simpleEmbed('blue', `Help for ${menu.name}`, `**Use \`${getPrefix(message.guild?.id)}help <Command>\` to get help for a command**\n\n\`${menu.cmds.join('`, `')}\``))
      return
    }

    if (!menu && help.commands[helpArg]) {
      let cmd = help.commands[helpArg]
      let embed = simpleEmbed('blue', `Command: ${helpArg}`, '')

      embed.addField('Usage', `\`${getPrefix(message.guild?.id)}${cmd.usage.trim()}\``)
      embed.addField('Description', cmd.desc),
      embed.addField('Aliases', cmd.aliases ? `\`${cmd.aliases.join('`, `')}\`` : 'None')

      message.channel.send(embed)
      return
    }
  }


  message.channel.send(helpEmbed).catch(console.error)
}