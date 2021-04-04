import { Client, Message } from 'discord.js'
import {
  checkCoolDown,
  coolDownSetup,
  setCoolDown,
  simpleEmbed,
} from '../../util/lib'
import fetch from 'node-fetch'

let coolDown = 3
let commandName = 'cat'
export function run(client: Client, message: Message, args: Array<string>) {
  if (coolDownSetup(message, commandName, coolDown)) return

  fetch('http://aws.random.cat/meow').then(async res => {
    let api = await res.json()
    let embed = simpleEmbed('green', 'Cat 🐱', '')
      .setImage(api.file)
      .setFooter('Powered by random.cat')

    message.channel.send(embed)
  })
}
