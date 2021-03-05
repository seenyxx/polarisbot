import { error } from 'console';
import { Client, EmbedField, Message, MessageEmbed, MessageEmbedOptions } from 'discord.js';
import { emoji } from 'node-emoji';
import { coolDownSetup, hardPunish, pollEmojis, errorMessage, pollEmojisResolvable, simpleEmbed } from '../../util/lib';
import { ReactionRoleRoleManager, ReactionRoleCounter } from '../../util/rrManager';

let coolDown = 5
let commandName = 'reaction-role'

export async function run(client: Client, message: Message, args: Array<string>) {

  if (!message.guild) return message.channel.send(errorMessage('This command is only avalible in a server'))
  if (!message.member?.hasPermission('MANAGE_ROLES')) return message.channel.send(errorMessage('Insufficient permissions'))

  if (coolDownSetup(message, commandName, coolDown)) return

  let counter = new ReactionRoleCounter()
  if (!counter.RRStatus(message.guild.id)) return message.channel.send(errorMessage('Your guild has reached the maximum amount of reaction roles'))

  message.channel.send('Enter the channel you want this reaction role to be in')
  const filter = (m: Message) => m.author.id === message.author.id

  // Channel of the message
  let msgs = await message.channel.awaitMessages(filter, {max: 1, time: 30000, errors: ['time'] })
  if (!msgs) return
  
  
  let channel = msgs.first()?.mentions.channels?.first()
  if (!channel?.id) return message.channel.send(errorMessage('No channel provided or invalid channel'))

  const actualChannel = message.guild.channels.cache.get(channel.id)

  if (!actualChannel) return message.channel.send(errorMessage('Invalid channel'))
  if (!actualChannel.isText()) return message.channel.send(errorMessage('Invalid channel'))


  message.channel.send('Provide the embed color')

  let colorMsgs = await message.channel.awaitMessages(filter, {max: 1, time: 30000, errors: ['time'] })
  if (!colorMsgs) return

  let color = colorMsgs.first()?.content.trim()
  if (!color?.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i)?.length) return message.channel.send(errorMessage('No color provided or invalid color'))

  
  message.channel.send('Provide Title and description with `|` as the separator')

  let titleMsg = await message.channel.awaitMessages(filter, {max: 1, time: 30000, errors: ['time'] })
  if (!titleMsg) return 

  let title = titleMsg.first()?.content.trim().split('|')
  if (!title?.length) return message.channel.send(errorMessage('Error'))
  if (title.length < 2) return message.channel.send(errorMessage('No title provided'))

  const actualTitle = title[0].trim()
  const actualDesc = title[1].trim()

  let embedOpts: MessageEmbedOptions = {
    color: color,
    title: actualTitle,
    description: actualDesc
  }

  const embed = new MessageEmbed(embedOpts)

  
  message.channel.send('Provide a list of reactions and roles in the format `<reaction> <roleName>, <reaction> <roleName>`, type `finished` when done')
  const collector = message.channel.createMessageCollector(filter, { max: 1, time: 240000 })
  
  let ereg = /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g

  let formatRegex = /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]) (.*)/ig

  const rrRoles = new ReactionRoleRoleManager()

  let rrMessage = await actualChannel.send(embed)

  collector.on('collect', (m: Message) => {

    let mRR = m.content.split(',')

    if (!m.content.match(formatRegex)) return message.channel.send(errorMessage('Invalid format'))

    mRR.forEach(m2 => {
      let mArgs = m2.trim().split(' ')
      
      if (mArgs.length !== 2) return

      let reaction = mArgs[0].trim()
      let roleName = mArgs[1].trim()
      
      let actualRole = m.guild?.roles.cache.find(r => r.name.trim() === roleName)
      if (reaction.match(ereg) && actualRole) {
        rrRoles.add(rrMessage.id, {
          emoji: reaction,
          roleID: actualRole.id
        })
        rrMessage.react(reaction)
        m.react('✅')
      }
    })
  })

  collector.on('end', collected => {
    let counter = new ReactionRoleCounter()
    if (!message.guild) return

    counter.addRRCount(message.guild.id)
    message.channel.send(simpleEmbed('green', 'Reaction Role Count', `This server's reaction roles:\n${counter.getRRCount(message.guild.id)}/100`))
  })

}