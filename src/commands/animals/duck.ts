import { Client, Message } from "discord.js";
import { checkCoolDown, coolDownSetup, setCoolDown, simpleEmbed } from "../../util/lib";
import fetch from 'node-fetch'

let coolDown = 3
let commandName = 'duck'
export function run(client: Client, message: Message, args: Array<string>) {
  if (coolDownSetup(message, commandName, coolDown)) return

  fetch('https://random-d.uk/api/v2/random').then(async res => {
    let api = await res.json()
    let embed = simpleEmbed('green', 'Duck 🦆', '')
      .setImage(api.url)
      .setFooter(api.message)

    message.channel.send(embed)
  })
}