import { Client, Message, MessageEmbed } from "discord.js";
import { readFileSync } from "fs";
import { simpleEmbed } from "../lib";
import { helpConfig } from "../types";

export function run(client: Client, message: Message, args: Array<string>) {
  let help = JSON.parse(readFileSync(`${__dirname}/../../help.json`).toString()) as helpConfig

  const helpEmbed = simpleEmbed('blue', '**Help**', '')
    .addFields(help)

  message.channel.send(helpEmbed).catch(console.error)
}