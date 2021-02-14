import { Message, VoiceState } from "discord.js";
import { get, request } from "http";
import { Config, voiceCount } from "./types";


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


// On voiceStateUpdate

// Variables for the command
let voiceGenName = 'Create'
let voiceGeneratedName = 'Room'
let currentVoiceCount: voiceCount = {}
let voiceRoomLimit = 8
let voiceRoomNamingOffset = 0

export function onVoiceStateUpdate(oldMember: VoiceState, newMember: VoiceState) {
  let oldMemberChannelName = oldMember.channel?.name.trim()
  let newMemberChannelName = newMember.channel?.name.trim()

  let newMemberCategory = newMember.channel?.parent

  // If the old channel the member was in was a room
  if (oldMemberChannelName && oldMemberChannelName?.search(voiceGeneratedName) > -1 ) {
    
    // If there is no one currently in the member's previous room
    if (oldMember.channel && oldMember.channel.members.array().length == 0) {

      // Delete the old channel
      oldMember.channel.delete().catch(console.error)

      // Update the channel

      
      currentVoiceCount[oldMember.guild.id] -= 1

      // Rename the voice channels to their order
      resortVoiceChannels(oldMember, newMember)
    }
  }

  // If the new channel the member is in is a generator
  if (newMemberChannelName && newMemberChannelName?.search(voiceGenName) > -1) {

    // Create a room for them
    oldMember.guild.channels.create(`🔊 ${voiceGeneratedName} ${currentVoiceCount[newMember.guild.id] += 1}`, { type: 'voice', userLimit: voiceRoomLimit }).then(channel => {
      
      // If the category of the generation channel exists then append the room to that category
      if (newMemberCategory)
        channel.setParent(newMemberCategory).catch(console.error)

      // Move the member to the room
      newMember.setChannel(channel).catch(console.error)
      
    }).catch(console.error)

    // Rename the voice channels to their order
    resortVoiceChannels(oldMember, newMember)
  }

} 



function resortVoiceChannels(oldMember: VoiceState, newMember: VoiceState) {
  let oldMemberCategory = oldMember.channel?.parent
  let newMemberCategory = newMember.channel?.parent


  let newMemberCategoryRooms = newMemberCategory?.children.filter(c => {
    return c.type == 'voice' && c.name.search(voiceGeneratedName) > -1 
  })
  let oldMemberCategoryRooms = oldMemberCategory?.children.filter(c => {
    return c.type == 'voice' && c.name.search(voiceGeneratedName) > -1 
  })

  if (newMemberCategory && newMemberCategoryRooms) {
    newMemberCategoryRooms.array().forEach(c => {
      c.setName(`🔊 Room ${c.position - voiceRoomNamingOffset}`).catch(console.error)
    })
    return
  }

  if (oldMemberCategory && oldMemberCategoryRooms) {
    oldMemberCategoryRooms.array().forEach(c => {
      c.setName(`🔊 Room ${c.position - voiceRoomNamingOffset}`).catch(console.error)
    })
  }
}