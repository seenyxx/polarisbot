import { Client, Message, MessageEmbed } from "discord.js";
import { readFileSync } from "fs";
import { helpConfig } from "../types";

export function run(client: Client, message: Message, args: Array<String>) {
  let help = JSON.parse(readFileSync(`${__dirname}/../../help.json`).toString()) as helpConfig

  const helpEmbed = new MessageEmbed()
    .setColor('#0099ff')
    .setTitle('**HELP MENU**')
    .addFields(help)

  message.channel.send(helpEmbed).catch(console.error)
}