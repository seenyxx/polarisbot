import { GuildMember, Message, MessageAttachment } from 'discord.js';
import { Database } from 'quickmongo';
import { create } from 'svg-captcha';
import { svg2png } from 'svg-png-converter';
import { simpleEmbed, unverifiedRole } from './lib';

const db = new Database(process.env.NODE_ENV === 'production' ? require('../../config.json').db : require('../../config-dev.json').db);


export async function runCaptcha(member: GuildMember, throwOnFail?: boolean) {
    // Server Captcha
    if (await db.get(`captcha.${member.guild.id}`)) {
      let unverifiedMemberRole = await unverifiedRole(member.guild)
      member.roles.add(unverifiedMemberRole)
  

      let embed = simpleEmbed('pigeon', `\`${member.guild.name}\` Captcha`, 'Please verify your identity, you have 3 minutes to do so (This is case insensitive)')
        .addField('Instructions', 'Please send the letters/numbers that are in the image provided to verify that you are not a robot. If you do not answer in 3 minutes you will be automatically kicked from the server.')
        .addField('Why?', 'This is to protect this server against raids')
        .setFooter(Math.floor(Math.random() * 10) > 6 ? 'How much more easy can it be' : '')

      let captcha = create({
        size: 8,
        background: '#2F3136',
        noise: 3,
        fontSize: 172,
        width: 768,
        height: 256,
        ignoreChars: 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z'
      })
  
      let outputBuffer = await svg2png({
        input: captcha.data,
        encoding: 'buffer',
        format: 'jpeg',
      })
  
      
      const attachment = new MessageAttachment(outputBuffer, 'captcha.jpg')

      embed.attachFiles([attachment])
      embed.setImage('attachment://captcha.jpg')
      

      let channel = await member.createDM(true)
      
      channel.send(embed)
      
      let collector = channel.createMessageCollector(m => m.author.id === member.id, {
        time: 180000
      })
  
      collector.on('collect', async (m: Message) => {
        if (m.content.toLowerCase() === captcha.text.toLowerCase()) {
          member.roles.remove(unverifiedMemberRole)
          m.channel.send(simpleEmbed('pigeon', 'Verified ✅', ''))
        }
        else {
          await m.channel.send(simpleEmbed('red', 'Failed Verification ❌', 'You will now be kicked from the server'))
          if (member.kickable)
            member.kick('Failed captcha')
          if (throwOnFail) {
            throw new Error('The user failed the verification process')
          }
        }
        collector.stop()
      })
  
      collector.on('end', async messages => {
  
        if (!messages.size) {
          
          await channel.send(simpleEmbed('red', 'Failed Verification ❌', 'You will now be kicked from the server'))
          if (member.kickable)
            member.kick('Failed captcha')
          if (throwOnFail) {
            throw new Error('The user failed the verification process')
          }
        }
      })
    }
}