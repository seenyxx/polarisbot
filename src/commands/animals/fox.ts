import { Client, Message } from "discord.js";
import fetch from 'node-fetch';
import { coolDownSetup, simpleEmbed } from "../../util/lib";

let coolDown = 3
let commandName = 'fox'
export function run(client: Client, message: Message, args: Array<string>) {
  if (coolDownSetup(message, commandName, coolDown)) return

  fetch('https://randomfox.ca/floof/').then(async res => {
    let api = await res.json()
    let embed = simpleEmbed('green', 'Fox 🦊', '')
      .setImage(api.image)
      .setFooter('Powered by randomfox.ca')

    message.channel.send(embed)
  })
}