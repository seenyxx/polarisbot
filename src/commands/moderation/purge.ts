import { Client, Collection, Message, TextChannel } from 'discord.js';

import { coolDownSetup, errorMessage, simpleEmbed } from '../../util/lib';

let coolDown = 5
let commandName = 'purge'

export async function run(client: Client, message: Message, args: string[] ) {
  if (coolDownSetup(message, commandName, coolDown)) return
  if (!message.guild) return
  if (!message.member?.hasPermission('MANAGE_MESSAGES')) return
  if (!args.length) return

  const channel = message.channel as TextChannel
  const arg1 = args.shift() as string
  const arg2 = args.shift() as string

  if (!arg1.match(/[0-9]+/)) return
  
  if (arg2.match(/contains/i)) {
    if (!args) return
    
    const search = args.join(' ').trim()


    const deleteAmount = parseInt(arg1)

    let repeats = Math.floor(deleteAmount / 100)
    let deleted = 0

    if (deleteAmount > 1000 || deleteAmount < 2) return message.channel.send(errorMessage('You cannot delete more than 1000 messages or less than 2 messages'))

    let msgArray = new Collection<string, Message>()

    for (let i = 0; i < repeats; i++) {
      const messages = (await message.channel.messages.fetch({
        limit: 100
      })).array()
      
      messages.forEach(m => {
        if (m.content.includes(search)) {
          
          if (m.deletable) {
            msgArray.set(m.id, m)
            deleted++
          }
        }
      })
    }
    if (deleteAmount % 100 > 0) {
      const messages = (await message.channel.messages.fetch({
        limit: deleteAmount % 100
      })).array()
      
      messages.forEach(m => {
        if (m.content.includes(search)) {
          
          if (m.deletable) {
            msgArray.set(m.id, m)
            deleted++
          }
        }
      })
    }

    const c = message.channel as TextChannel

    c.bulkDelete(msgArray)

    channel.send(simpleEmbed('green', 'Purge', `Issued by: <@${message.author.id}>\nIndexed ${deleteAmount} messages(s)\nRemoved ${deleted} message(s)`)).then(m => {
      m.delete({
        timeout: 3000
      })
      message.delete()
    })

    return
  }
  const user = message.mentions.users.first()
  if (user) {
    const deleteAmount = parseInt(arg1)
    
    let repeats = Math.floor(deleteAmount / 100)
    let deleted = 0

    if (deleteAmount > 1000 || deleteAmount < 2) return message.channel.send(errorMessage('You cannot delete more than 1000 messages or less than 2 messages'))
    
    let msgArray = new Collection<string, Message>()
    
    for (let i = 0; i < repeats; i++) {
      const messages = (await message.channel.messages.fetch({
        limit: 100
      })).array()
      
      messages.forEach(m => {
        if (m.author.id === user.id) {
          
          if (m.deletable) {
            msgArray.set(m.id, m)
            deleted++
          }
        }
      })
    }
    if (deleteAmount % 100 > 0) {
      const messages = (await message.channel.messages.fetch({
        limit: deleteAmount % 100
      })).array()
      
      messages.forEach(m => {
        if (m.author.id === user.id) {
          
          if (m.deletable) {
            msgArray.set(m.id, m)
            deleted++
          }
        }
      })
    }
    const c = message.channel as TextChannel

    c.bulkDelete(msgArray)

    channel.send(simpleEmbed('green', 'Purge', `Issued by: <@${message.author.id}>\nIndexed ${deleteAmount} messages(s)\nRemoved ${deleted} message(s)`)).then(m => {
      m.delete({
        timeout: 3000
      })
      message.delete()
    })

    return
  }

  if (arg1.match(/[0-9]+/)) {
    const deleteAmount = parseInt(arg1)

    if (deleteAmount > 1000) return message.channel.send(errorMessage('You cannot delete more than 1000 messages or less than 2 messages'))

    const deleted = await channel.bulkDelete(deleteAmount)

    

    channel.send(simpleEmbed('green', 'Purge', `Issued by: <@${message.author.id}>\nRemoved ${deleted.size} message(s)`)).then(m => {
      m.delete({
        timeout: 3000
      })
      message.delete()
    })
  }
}

