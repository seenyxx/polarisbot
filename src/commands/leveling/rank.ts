import { Canvas, loadImage, registerFont } from 'canvas';
import { Client, GuildMember, Message, MessageAttachment } from 'discord.js';

import { Leveling } from '../../util/leveling';
import { coolDownSetup, simpleEmbed, statuses } from '../../util/lib';

let coolDown = 5
let commandName = 'rank'

export const aliases = ['level', 'lvl']

export async function run(client: Client, message: Message, args: Array<string>) {
  if (coolDownSetup(message, commandName, coolDown)) return
  
  if (!message.guild || !message.member) return

  let member = message.member

  const mention = message.mentions.members?.first()
  if (mention) {
    member = mention
  }

  const userEXP = new Leveling(member.id, message.guild.id)
  
  if (!userEXP.getLevelingStatus()) return message.channel.send('Leveling is not enabled in this server')

  const xp = userEXP.get()
  const xpModulo = xp % 1000
  const xpLevel = Math.floor(xp / 1000)
  const color = userEXP.getColor()
  
  const attachment = new MessageAttachment(await genCard(xpLevel, color !== 'default' && color ? color : member.displayHexColor , xpModulo, member), 'progressbar.png')

  message.channel.send(attachment)
}

async function genCard(xplevel: number, progressColor: string, precisePercentage: number, member: GuildMember) {
  const canvas = new Canvas(1500, 500)
  const ctx = canvas.getContext('2d')
  const size = 256
  const pfpMargin = size + 80

  ctx.fillStyle = '#1d1f24'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  
  ctx.fillStyle = progressColor
  ctx.fillRect(0, 0, 18, canvas.height)


  progressBar(canvas, ctx, 1000, '#FFFFFF', size)
  progressBar(canvas, ctx, precisePercentage, progressColor, size)


  ctx.font = member.user.tag.length < 12 ? 'bold 70px Noto Sans JP' : 'bold 50px Noto Sans JP'
  ctx.fillStyle = '#FFFFFF'
  ctx.fillText(`${member.user.tag}`, pfpMargin + 80, canvas.height / 2.5)
  ctx.font = '70px Noto Sans JP'
  ctx.fillText(`LVL: ${xplevel + 1} XP: ${precisePercentage} / 1000`, pfpMargin + 80, canvas.height / 2.5 + 70)

  

	const avatar = await genProfilePic(size, member)
	ctx.drawImage(avatar, 80, 70, 256, 256);



  return canvas.toBuffer()
}

async function progressBar(canvas: Canvas,ctx: CanvasRenderingContext2D, size: number, progressColor: string, pfpSize: number) {
  if (size === 0) return
  const verticalDistance = canvas.height / 1.25
  const pfpSizeMargin = 140

  ctx.strokeStyle = progressColor
  ctx.lineWidth = 60
  ctx.lineCap = 'round'
  ctx.beginPath();
  ctx.moveTo(pfpSize - pfpSizeMargin, verticalDistance);
  ctx.lineTo(pfpSize - pfpSizeMargin + (size * 1.2), verticalDistance);
  ctx.stroke();
}

async function genProfilePic(size: number, member: GuildMember) {
  const canvas = new Canvas(size, size)
  const ctx = canvas.getContext('2d')

  ctx.beginPath();
	ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();
  
	const avatar = await loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
	
  ctx.drawImage(avatar, 0, 0, size, size)

  return await loadImage(canvas.toDataURL())
}
