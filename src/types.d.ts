import { Client } from "discord.js";

export interface Command {
  run: runCommand
}

export type runCommand = (client: Client, message: Message, args: Array<string>) => void

export interface Config {
  prefix: string,
  token: string,
}

export interface Commands {
  [key: string]: Command
}