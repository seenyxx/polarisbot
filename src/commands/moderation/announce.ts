import { Client, Collection, Message, Role, TextChannel } from 'discord.js';

import { coolDownSetup, errorMessage, simpleEmbed } from '../../util/lib';

let coolDown = 5
let commandName = 'announce'

export function run(client: Client, message: Message, args: Array<string>) {
  if (!message.guild) return
  if (!message.member?.hasPermission('MANAGE_CHANNELS') || !message.member?.hasPermission('MANAGE_MESSAGES')) return message.channel.send(errorMessage('Insufficient Permissions'))
  if (coolDownSetup(message, commandName, coolDown)) return
  
  message.channel.send('Separate your message in this format `Title | Message`')
  const waitForMessage = message.channel.awaitMessages(m => m.author.id === message.author.id, {
    time: 240000,
    max: 1
  })

  waitForMessage.then(m => {
    if (!message.guild) return
    const first = m.first()

    if (!first) return message.channel.send(errorMessage('Announcement not provided'))

    const messageOpts = first.content.split('|')

    if (messageOpts.length !== 2) return message.channel.send(errorMessage('Invalid format'))
    
    const channels = message.guild.channels.cache.filter(c => c.isText()) as Collection<string, TextChannel>
    const pingRole = message.guild.roles.cache.find(r => r.name.toLowerCase().includes('announce'))

    let sent = 0

    channels.forEach(c => {
      if (!message.guild) return
      if (sent < 1 && c.permissionsFor(message.guild.roles.everyone)?.has('READ_MESSAGE_HISTORY') && c.name.toLowerCase().includes('announce')) {
        c.send(`${pingRole ? `<@&${pingRole.id}>` : '@everyone'} New Global Announcement 📢`)
        sent++
      }
      
      const embed = simpleEmbed('blue', messageOpts[0].trim(), messageOpts[1].trim())

      embed.setTimestamp(Date.now())
      embed.setAuthor(message.author.tag, message.author.displayAvatarURL())

      c.send(embed)
    })
  })
  
}