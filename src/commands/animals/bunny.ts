import { Client, Message } from "discord.js";
import { checkCoolDown, coolDownSetup, setCoolDown, simpleEmbed } from "../../lib";
import fetch from 'node-fetch'

let coolDown = 3
let commandName = 'bunny'
export function run(client: Client, message: Message, args: Array<string>) {
  if (coolDownSetup(message, commandName, coolDown)) return

  fetch('https://api.bunnies.io/v2/loop/random/?media=gif,png').then(async res => {
    let api = await res.json()
    let embed = simpleEmbed('green', 'Bunny 🐇', '')
      .setImage(api.media.poster)
      .setFooter('Powered by bunnies.io')

    message.channel.send(embed)
  })
}