import { Client, Message } from 'discord.js'
import {
  checkCoolDown,
  coolDownSetup,
  setCoolDown,
  simpleEmbed,
} from '../../util/lib'
import fetch from 'node-fetch'

let coolDown = 3
let commandName = 'shiba'
export function run(client: Client, message: Message, args: Array<string>) {
  if (coolDownSetup(message, commandName, coolDown)) return

  fetch('http://shibe.online/api/shibes?count=1').then(async res => {
    let api = await res.json()
    let embed = simpleEmbed('green', 'Shiba Inu 🐕', '')
      .setImage(api[0])
      .setFooter('Powered by shibe.online')

    message.channel.send(embed)
  })
}
