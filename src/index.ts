import { Client, MessageAttachment, TextChannel, Message } from 'discord.js';
import { existsSync, fdatasync, fstat, readdir, readFileSync, rm, rmSync, stat } from 'fs'
import { createServer } from 'http'
import { BotCache } from './cache';
import { noGif, simpleEmbed, unverifiedRole } from './lib';
import { Command, Commands, Config } from './types'
import db from 'quick.db'
import { create } from 'svg-captcha';
import { svg2png } from 'svg-png-converter';


function parseConfiguration() : Config {
  let unparsedJSON = readFileSync(process.env.NODE_ENV === 'production' ? `${__dirname}/../config.json`: `${__dirname}/../config-dev.json`).toString()
  return JSON.parse(unparsedJSON)
}


console.log(process.env.NODE_ENV)
// Parse configuration file
const config = parseConfiguration()

const client = new Client()
const botCache = new BotCache()

botCache.set('helpConfig', JSON.parse(readFileSync(`${__dirname}/../help.json`).toString()))
botCache.set('config', config)

client.on('ready', () => {
  console.log(`Logged in as ${client.user?.tag}`)

  client.user?.setPresence({
    status: 'online',
    activity: {
      name: `${config.prefix}help`,
      type: 'LISTENING'
    }
  })

  // Reset cooldowns

  db.delete('cooldowns')
})


client.on('message', message => {
  if (message.author.bot) return

  // Get rid of gifs from /tenor or /giphy
  noGif(message)

  let prefix: string = db.get(`prefix.${message.guild?.id}`) ? db.get(`prefix.${message.guild?.id}`) : config.prefix

  if (message.content.indexOf(prefix) !== 0) return

  const args = message.content.slice(prefix.length).trim().split(/ +/g)  
  const command = args.shift()?.toLowerCase()  


  if (!command) return
  
  
  // Get the command to run
  const cmd = commands[command]
  if (!cmd) return
  
  cmd.run(client, message, args)
})

client.on('guildMemberAdd', async member => {
  if (member.user.bot) return
  if (db.get(`ld.${member.guild.id}`)) {
    if (member.bannable) member.ban({
      reason: 'LOCKDOWN'
    })
    return
  }
  if (db.get(`captcha.${member.guild.id}`)) {
    member.roles.add(await unverifiedRole(member.guild))

    let embed = simpleEmbed('pigeon', `${member.guild.name} Captcha`, 'Please verify your identity as a person, you have 1 minute to do so')
    
    let captcha = create({
      size: 6,
      background: 'white'
    })

    let outputBuffer = await svg2png({ 
      input: captcha.data, 
      encoding: 'buffer', 
      format: 'jpeg',
    })

    
    let channel = await member.createDM(true)
    channel.send(embed)
    channel.send(new MessageAttachment(outputBuffer))

    let collector = channel.createMessageCollector(m => m.author.id === member.id, {
      time: 60000
    })

    collector.on('collect', async (m: Message) => {
      if (m.content.toLowerCase() === captcha.text.toLowerCase()) {
        m.channel.send(simpleEmbed('pigeon', 'Verified ✅', ''))
        member.roles.remove(await unverifiedRole(member.guild))
      }
      else {
        await m.channel.send(simpleEmbed('red', 'Failed Verification ❌', 'You will now be kicked from the server'))
        if (member.kickable)
          member.kick('Failed captcha')
      }
      collector.stop()
    })
    collector.on('end', async messages => {
      if (!messages) {
        await channel.send(simpleEmbed('red', 'Failed Verification ❌', 'You will now be kicked from the server'))
        if (member.kickable)
          member.kick('Failed captcha')
      }
    })
  }
})




const commands: Commands  = {}

// Command Loader

appendDirectoryCommands(`${__dirname}/commands`)

readdir(`${__dirname}/commands/`, (e, f) => {
  if (e) return console.error(e)  


  f.forEach(file => {
    
    if (file.endsWith('.js')) return

    stat(`${__dirname}/commands/${file}`, (e, fsStat) => {
      if (e) return console.error(e)
      if (!fsStat) return

      if (fsStat.isDirectory()) {
        appendDirectoryCommands(`${__dirname}/commands/${file}`)
      }
    })
  })

})

function appendDirectoryCommands(dir: string) {
  
  readdir(dir, (err, files) => {
    if (err) return console.error(err)  

    files.forEach(file => {
      if (!file.endsWith('.js')) return  

      let props: Command = require(`${dir}/${file}`)  
      let commandName = file.split('.')[0]  

      console.log(`Loading command ${commandName}`)  

      commands[commandName] = props
    })  
  })  
}




client.login(config.token)


