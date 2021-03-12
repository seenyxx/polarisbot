import { Canvas } from 'canvas';
import { Client, Message, MessageAttachment } from 'discord.js';
import db from 'quick.db';

import { BotCache } from '../../util/cache';
import { coolDownSetup, errorMessage, simpleEmbed } from '../../util/lib';
import { Leveling } from '../../util/leveling';

let coolDown = 5
let commandName = 'rank'

export const aliases = ['level', 'lvl']

export function run(client: Client, message: Message, args: Array<string>) {
  if (coolDownSetup(message, commandName, coolDown)) return
  
  if (!message.guild || !message.member) return

  let member = message.member

  const mention = message.mentions.members?.first()
  if (mention) {
    member = mention
  }

  const userEXP = new Leveling(member.id, message.guild.id)
  const xp = userEXP.get()
  const xpModulo = xp % 1000
  const xpLevel = Math.floor(xp / 1000)

  const attachment = new MessageAttachment(genCard(userEXP.getColor(), xpModulo), 'progressbar.png')

  const embed = simpleEmbed(userEXP.getColor().trim(), 'Rank', `**LVL ${xpLevel}**\n**Experience: ${xpModulo}/1000**`)

  embed.attachFiles([attachment])
  embed.setImage('attachment://progressbar.png')

  message.channel.send(embed)
}

function genCard(progressColor: string, precisePercentage: number) {
  const canvas = new Canvas(1000, 40)
  const ctx = canvas.getContext('2d')
  
  ctx.fillStyle = progressColor
  ctx.fillRect(0, 0, precisePercentage, canvas.height)

  return canvas.toBuffer()
}