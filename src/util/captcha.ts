import { GuildMember, Message, MessageAttachment } from 'discord.js';
import db from 'quick.db'
import { create } from 'svg-captcha';
import { svg2png } from 'svg-png-converter';
import { simpleEmbed, unverifiedRole } from './lib';

export async function runCaptcha(member: GuildMember) {
    // Server Captcha
    if (db.get(`captcha.${member.guild.id}`)) {
      let unverifiedMemberRole = await unverifiedRole(member.guild)
      member.roles.add(unverifiedMemberRole)
  

      let embed = simpleEmbed('pigeon', `\`${member.guild.name}\` Captcha`, 'Please verify your identity, you have 3 minutes to do so (This is case insensitive)')
        .addField('Instructions', 'Please send the letters/numbers that are in the image provided to verify that you are not a robot.')
        .addField('Why?', 'This is to protect this server against raids')
        

      let captcha = create({
        size: 6,
        background: '#2C2F33'
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
        }
        collector.stop()
      })
  
      collector.on('end', async messages => {
  
        if (!messages.size) {
          
          await channel.send(simpleEmbed('red', 'Failed Verification ❌', 'You will now be kicked from the server'))
          if (member.kickable)
            member.kick('Failed captcha')
        }
      })
    }
}