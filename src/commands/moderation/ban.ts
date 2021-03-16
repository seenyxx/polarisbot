import { Client, Message } from "discord.js";
import { coolDownSetup, hardPunish } from "../../util/lib";

let coolDown = 3
let commandName = 'ban'

export function run(client: Client, message: Message, args: Array<string>) {
  if (coolDownSetup(message, commandName, coolDown)) return
  hardPunish('BAN', message, args)
}