import { Client, Message, MessageEmbed } from "discord.js";
import { readFileSync } from "fs";
import { BotCache } from "../cache";
import { coolDownSetup, simpleEmbed } from "../lib";
import { helpConfig } from "../types";

let coolDown = 20
let commandName = 'help'
export function run(client: Client, message: Message, args: Array<string>) {

  if (coolDownSetup(message, commandName, coolDown)) return

  let help = new BotCache().get('helpConfig') as helpConfig
  const helpEmbed = simpleEmbed('blue', '**Help**', '')
    .addFields(help)

  message.channel.send(helpEmbed).catch(console.error)
}