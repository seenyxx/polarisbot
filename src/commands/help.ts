import { Client, Message } from "discord.js";
import { readFileSync } from "fs";

export function run(client: Client, message: Message, args: Array<String>) {
  readFileSync(`${__dirname}/../help.json`)
}