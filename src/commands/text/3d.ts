import { Client, Message, MessageAttachment, MessageEmbed } from 'discord.js';
import figlet from "figlet";
import { coolDownSetup, simpleEmbed, errorMessage } from '../../util/lib';
import { Canvas } from 'canvas';

let coolDown = 5
let commandName = '3dt'

export function run(client: Client, message: Message, args: Array<string>) {
  if (coolDownSetup(message, commandName, coolDown)) return
  if (!args[0]) return

  let text = args.join(' ')
  const canvas = new Canvas(1024, 400)
  const ctx = canvas.getContext('2d')

  ctx.font = 'bold 96px Noto Sans JP'
  ctx.fillStyle = '#ffffff'


  if (text.length > 38) return message.channel.send(errorMessage('You are not allowed to put more than 38 characters'))

  if (text.length > 16) text = insert(text, 17, '\n')
  
  if (text.length > 32) text = insert(text, 33, '\n')
  draw3dText(ctx, text, 12, 120, 8)


  const image = new MessageAttachment(canvas.toBuffer(), '3d.png')

  const embed = simpleEmbed('blue', '3D Text', '')

  embed.attachFiles([image])
  embed.setImage('attachment://3d.png')

  message.channel.send(embed)
}

function draw3dText(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, depth: number){
  let i = 0
  ctx.fillStyle = "#DDDDDD";

  for (i = 0; i < depth; i++) {
    ctx.fillText(text, x - i, y - i);
  }
  
  ctx.fillStyle = "#FFFFFF";
  ctx.shadowColor = "#222222";
  ctx.shadowBlur = 10;
  ctx.shadowOffsetX = depth + 2;
  ctx.shadowOffsetY = depth + 2;
  ctx.fillText(text, x - i, y - i);
}

function insert(text: string, index: number, inserted: string)
{   
  return text.substr(0, index) + inserted + text.substr(index);
}