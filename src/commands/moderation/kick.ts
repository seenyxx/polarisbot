import { Client, Message } from "discord.js";
import { coolDownSetup, hardPunish } from "../../lib";

let coolDown = 15
let commandName = 'kick'

export function run(client: Client, message: Message, args: Array<string>) {
  if (coolDownSetup(message, commandName, coolDown)) return
  hardPunish('KICK', message, args)
}