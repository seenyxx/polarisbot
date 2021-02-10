import { Message } from "discord.js";
import { request } from "http";


// Command for both bans and kicks
export function hardPunish(mode: 'BAN' | 'KICK', message: Message, args: Array<String>) {
  args.shift()

  if(!message.member?.hasPermission('KICK_MEMBERS') && mode == 'KICK') {
    message.channel.send('You have no permissions to do that')
    return
  }
  
  if(!message.member?.hasPermission('BAN_MEMBERS') && mode == 'BAN') {
    message.channel.send('You have no permissions to do that')
    return
  }

  let mentionMember = message.mentions.members?.first()

  if(!mentionMember) {
    return message.channel.send(`Mention member which you want to ${mode == 'BAN' ? 'ban' : 'kick'}`);
  }


  let authorHighestRole = message.member?.roles.highest.position
  let mentionHighestRole = mentionMember.roles.highest.position

  if (!authorHighestRole) return


  if(mentionHighestRole >= authorHighestRole) {
    message.channel.send(`You can\'t ${mode == 'BAN' ? 'ban' : 'kick'} members with equal or higher position`)
    return
  }

  if(!mentionMember.manageable) {
    message.channel.send(`I do not have the required permissions ${mode == 'BAN' ? 'ban' : 'kick'} this user`)
    return
  }

  let punishReason = args[0] ? args.join(' ') : 'No reason provided'

  mentionMember.send(`You were ${mode == 'BAN' ? 'banned' : 'kicked'} from **${message.guild?.name}**\nReason: \`${punishReason}\``).then(() => {
    
    if (mode == 'KICK') {
      mentionMember?.kick(punishReason)
      .then(() => {
        message.channel?.send(`**${mentionMember?.user.tag}** was kicked by ${message.member?.user.tag}\nReason: \`${punishReason}\``)
      }).catch(console.error)
    }
    else {
      mentionMember?.ban({
        reason: punishReason
      })
      .then(() => {
        message.channel?.send(`**${mentionMember?.user.tag}** was banned by ${message.member?.user.tag}\nReason: \`${punishReason}\``)
      }).catch(console.error)
    }
  })
}

// Text Filters

export function noGif(message: Message) {
  if (!message) return

  let containsGif = message.content.match('https://tenor.com/view/sailor-moon-suit-old-man-peace-sign-sailor-scout-anime-gif-14298094')
  if (containsGif) {
    message.channel.send(`${message.author.tag} sent the no no gif in chat`)
    message.delete().catch(console.error)
  }
}



