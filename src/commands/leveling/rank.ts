import { Canvas, loadImage, registerFont, rsvgVersion } from 'canvas'
import Color from 'color'
import {
  Client,
  GuildMember,
  Message,
  MessageAttachment,
  PresenceStatus,
} from 'discord.js'

import { Leveling } from '../../util/leveling'
import {
  coolDownSetup,
  simpleEmbed,
  statuses,
  statusColors,
} from '../../util/lib'

let coolDown = 5
let commandName = 'rank'

export const aliases = ['level', 'lvl']

export async function run(
  client: Client,
  message: Message,
  args: Array<string>
) {
  if (coolDownSetup(message, commandName, coolDown)) return

  if (!message.guild || !message.member) return

  let member = message.member

  const mention = message.mentions.members?.first()
  if (mention) {
    member = mention
  }

  const userEXP = new Leveling(member.id, message.guild.id)

  if (!(await userEXP.getLevelingStatus()))
    return message.channel.send('Leveling is not enabled in this server')

  const xp = await userEXP.get()
  const xpModulo = xp % 1000
  const xpLevel = Math.floor(xp / 1000)
  const color = await userEXP.getColor()
  const users = await userEXP.getGuild()
  const sortable = Object.entries(users).sort(([, a], [, b]) => b - a)
  const rankNumber =
    sortable.findIndex(u => u[0] === member.id && u[1] === xp) + 1
  const attachment = new MessageAttachment(
    await genCard(
      rankNumber,
      xpLevel,
      color !== 'default' && color
        ? color
        : member.displayHexColor !== '#000000'
        ? member.displayHexColor
        : '#0099ff',
      xpModulo,
      member,
      member.user.presence.status
    ),
    'progressbar.png'
  )

  message.channel.send(attachment)
}

async function genCard(
  rankNumber: number,
  xplevel: number,
  progressColor: string,
  precisePercentage: number,
  member: GuildMember,
  status: PresenceStatus
) {
  const canvas = new Canvas(1400, 450)
  const ctx = canvas.getContext('2d')
  const size = 256
  const pfpMargin = size + 80

  let gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)

  gradient.addColorStop(0, progressColor)
  gradient.addColorStop(1, adjustColor(progressColor))

  ctx.fillStyle = gradient
  roundedRect(ctx, 0, 0, canvas.width, canvas.height, 30)

  ctx.fillStyle = '#23272A'
  roundedRect(ctx, 20, 20, 1360, 412, 30)

  progressBar(canvas, ctx, 1000, '#FFFFFF', size)
  progressBar(canvas, ctx, precisePercentage, progressColor, size)

  ctx.fillStyle = '#FFFFFF'
  ctx.font =
    member.user.tag.length < 22
      ? 'bold 70px Noto Sans JP'
      : 'bold 50px Noto Sans JP'

  ctx.fillText(`${member.user.tag}`, pfpMargin + 80, canvas.height / 2.5)
  const stats = `LVL: ${
    xplevel + 1
  }\t•\t${precisePercentage} / 1000 xp`
  ctx.font = stats.length < 36 ? '60px Noto Sans JP' : '56px Noto Sans JP ₓₚ'
  ctx.fillText(stats, pfpMargin + 80, canvas.height / 2.5 + 70)

  ctx.font = 'bold 70px Noto Sans JP'
  ctx.fillStyle = progressColor
  const rank = ctx.measureText(`#${rankNumber}`)
  ctx.fillText(`#${rankNumber}`, canvas.width - 75 - rank.width, 125)

  const avatar = await genProfilePic(size, member)
  ctx.drawImage(avatar, 95, 100, 256, 256)

  return canvas.toBuffer()
}

async function progressBar(
  canvas: Canvas,
  ctx: CanvasRenderingContext2D,
  size: number,
  progressColor: string,
  pfpSize: number
) {
  if (size === 0) return
  const verticalDistance = 315
  const pfpSizeMargin = -180

  ctx.strokeStyle = progressColor
  ctx.lineWidth = 60
  ctx.lineCap = 'round'

  ctx.beginPath()
  ctx.moveTo(pfpSize - pfpSizeMargin, verticalDistance)
  ctx.lineTo(pfpSize - pfpSizeMargin + size * 0.85, verticalDistance)
  ctx.stroke()
}

async function genProfilePic(size: number, member: GuildMember) {
  const canvas = new Canvas(size, size)
  const ctx = canvas.getContext('2d')

  ctx.beginPath()
  ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2, true)
  ctx.closePath()
  ctx.clip()

  const avatar = await loadImage(
    member.user.displayAvatarURL({ format: 'jpg' })
  )

  ctx.drawImage(avatar, 0, 0, size, size)

  return await loadImage(canvas.toDataURL())
}

function adjustColor(hex: string) {
  let color = Color(hex)
  return color.rotate(-80).lighten(0.1).saturate(0.3).hex()
}

function roundedRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) {
  if (w < 2 * r) r = w / 2
  if (h < 2 * r) r = h / 2
  ctx.beginPath()
  ctx.moveTo(x + r, y)
  ctx.arcTo(x + w, y, x + w, y + h, r)
  ctx.arcTo(x + w, y + h, x, y + h, r)
  ctx.arcTo(x, y + h, x, y, r)
  ctx.arcTo(x, y, x + w, y, r)
  ctx.closePath()
  ctx.fill()
}
