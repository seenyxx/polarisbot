import { ColorResolvable, Guild, Message, MessageEmbed, Role, TextChannel, User, VoiceState } from "discord.js" 
import { get, request } from "http" 
import { Config, presetColor, voiceCount } from "../types" 
import db from 'quick.db'
import { BotCache } from "./cache";
import { parseDefaultInterpolator } from "./msgInterpolation";


// Command for both bans and kicks
export function hardPunish(mode: 'BAN' | 'KICK', message: Message, args: Array<string>) {
  args.shift()

  if(!message.member?.hasPermission('KICK_MEMBERS') && mode == 'KICK') {
    message.channel.send(errorMessage('Insufficient Permissions'))
    return
  }
  
  if(!message.member?.hasPermission('BAN_MEMBERS') && mode == 'BAN') {
    message.channel.send(errorMessage('Insufficient Permissions'))
    return
  }

  let mentionMember = message.mentions.members?.first()

  if(!mentionMember) {
    return message.channel.send(errorMessage(`Mention member which you want to ${mode == 'BAN' ? 'ban' : 'kick'}`))
  }


  let authorHighestRole = message.member?.roles.highest.position
  let mentionHighestRole = mentionMember.roles.highest.position

  if (!authorHighestRole) return


  if(mentionHighestRole >= authorHighestRole) {
    message.channel.send(errorMessage(`You can\'t ${mode == 'BAN' ? 'ban' : 'kick'} members with equal or higher position`))
    return
  }

  if(!mentionMember.manageable) {
    message.channel.send(errorMessage(`I do not have the required permissions ${mode == 'BAN' ? 'ban' : 'kick'} this user`))
    return
  }

  let punishReason = args[0] ? args.join(' ') : 'No reason provided'

  mentionMember.send(`You were ${mode == 'BAN' ? 'banned' : 'kicked'} from **${message.guild?.name}**\nReason: \`${punishReason}\``).then(() => {
    
    if (mode == 'KICK') {
      mentionMember?.kick(punishReason)
      .then(() => {
        message.channel?.send(simpleEmbed('green', 'Kick', `**${mentionMember?.user.tag}** was kicked by ${message.member?.user.tag}\nReason: \`${punishReason}\``))
      }).catch(e => message.channel.send(errorMessage(e)))
    }
    else {
      mentionMember?.ban({
        reason: punishReason
      })
      .then(() => {
        message.channel?.send(simpleEmbed('green', 'Ban', `**${mentionMember?.user.tag}** was banned by ${message.member?.user.tag}\nReason: \`${punishReason}\``))
      }).catch(e => message.channel.send(errorMessage(e)))
    }
  })
}

// Text Filters

export function noGif(message: Message) {
  if (!message) return
  if (!db.get(`gf.${message.guild?.id}`)) return

  let containsGif = message.content.match('https://tenor.com/view/sailor-moon-suit-old-man-peace-sign-sailor-scout-anime-gif-14298094') || message.content.match('http://tenor.com/view/sailor-moon-suit-old-man-peace-sign-sailor-scout-anime-gif-14298094') 
  if (containsGif) {
    message.channel.send(`${message.author.tag} sent the no no gif in chat`)
    message.delete().catch(e => message.channel.send(errorMessage(e)))
  }
}







// Function for parsing displayTime

export function parseDisplayUptime(uptime: number) {
  let secs = Math.floor(uptime)

  let days = Math.floor(secs / (3600*24)) 

  secs -= days * 3600 * 24 

  let hours = Math.floor(secs / 3600) 
  
  secs -= hours * 3600 

  let mins = Math.floor(secs / 60) 

  secs -= mins * 60 
  
  return [`${days}:${hours}:${mins}:${secs}`, `${days}d ${hours}h ${mins}m ${secs}s`]
}

export function simpleEmbed(presetColor: presetColor, title: string, desc: string) {
  let presetColorHex: ColorResolvable = '#000000'
  switch(presetColor) {
    case 'red':
      presetColorHex = '#e71837'
      break
    case 'blue':
      presetColorHex = '#0099ff'
      break
    case 'green': 
      presetColorHex = '#00FF7F'
      break
    case 'gold':
      presetColorHex = '#fcba03'
      break
    case 'pigeon':
      presetColorHex = '#637d96'
      break
    case 'RANDOM':
      presetColorHex = 'RANDOM'
      break
    case 'BLURPLE':
      presetColorHex = 'BLURPLE'
      break
  }
  
  
  let embed = new MessageEmbed()
    .setColor(presetColorHex)
    .setTitle(parseDefaultInterpolator(title))
    .setDescription(parseDefaultInterpolator(desc))

  return embed
}

export function errorMessage(e: any) {
  return simpleEmbed('red','Error:',`\`\`\`${e}\`\`\``)
}

export function coolDown(timeLeftMS: number) {
  return(simpleEmbed('blue', '⏱ Slow Down!', `There is still ${timeLeftMS / 1000}s before you use this command again`))
} 


export function setCoolDown(userID: string, cmd: string, coolDownSecs: number) {
  let coolDownMS = coolDownSecs * 1000

  // Sets the database value to the time when the cooldown completes
  db.set(`cooldowns.${cmd}-${userID}`, Date.now() + coolDownMS)
}

export function checkCoolDown(msg: Message, userID: string, cmd: string) {
  let completeTime = db.get(`cooldowns.${cmd}-${userID}`)

  let time = Date.now()
  
  if (time < completeTime) {
    
    msg.channel.send(coolDown(completeTime - time))
    return false
  }
  else {
    db.delete(`cooldowns.${cmd}-${userID}`)
    return true
  }
  
}

export function coolDownSetup(message: Message, commandName: string, coolDownSecs: number) {
  if(!checkCoolDown(message, message.author.id, commandName)) return true
  setCoolDown(message.author.id, commandName, coolDownSecs)
}


export async function unverifiedRole(guild: Guild) {
  let role = guild.roles.cache.find(r => r.name == "Unverified")

  if (role) {
    removeAllPermissions(guild, role)
    return role
  }

  let retRole = await guild.roles.create({
    data: {
      name: 'Unverified'
    }
  })
  removeAllPermissions(guild, retRole)
  return retRole
}

export function removeAllPermissions(guild: Guild, role: Role) {
  guild.channels.cache.forEach(c => {
    c.createOverwrite(role, {
      SEND_MESSAGES: false,
      MANAGE_CHANNELS: false,
      MANAGE_MESSAGES: false,
      VIEW_CHANNEL: true
    })
  })
}

export function replaceValue(doc: string, value: string, rep: string) {
  doc.replace(`{{ ${value} }}`, rep)
}


export const pollEmojis = [
  ':regional_indicator_a:', 
  ':regional_indicator_b:', 
  ':regional_indicator_c:', 
  ':regional_indicator_d:', 
  ':regional_indicator_e:', 
  ':regional_indicator_f:', 
  ':regional_indicator_g:', 
  ':regional_indicator_h:', 
  ':regional_indicator_i:', 
  ':regional_indicator_j:',
]

export const pollEmojisResolvable = [
  '🇦',
  '🇧',
  '🇨',
  '🇩',
  '🇪',
  '🇫',
  '🇬',
  '🇭',
  '🇮',
  '🇯'
]

export function getPrefix(id?: string) {
  if (!id) return new BotCache().get('config').prefix
  return db.get(`prefix.${id}`) ? db.get(`prefix.${id}`) : new BotCache().get('config').prefix
}


