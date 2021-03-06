import { Client, Message } from "discord.js";
import fetch from 'node-fetch';
import { coolDownSetup, simpleEmbed } from "../../util/lib";

let coolDown = 3
let commandName = 'dog'
export function run(client: Client, message: Message, args: Array<string>) {
  if (coolDownSetup(message, commandName, coolDown)) return

  fetch('https://dog.ceo/api/breeds/image/random').then(async res => {
    let api = await res.json()
    let embed = simpleEmbed('green', 'Dog 🐶', '')
      .setImage(api.message)
      .setFooter('Powered by dog.ceo')

    message.channel.send(embed)
  })
}