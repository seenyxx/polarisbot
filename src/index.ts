import { registerFont } from 'canvas';
import { Client } from 'discord.js';
import { readdir, readFileSync, stat } from 'fs';
import db from 'quick.db';

import { Command, Commands, Config } from './types';
import { BotCache } from './util/cache';
import { runCaptcha } from './util/captcha';
import { lvlSetup } from './util/leveling';
import { noGif, dlE } from './util/lib';
import { handleDeletion, reactionAddHandler, reactionRemoveHandler, ReactionRoleRoleManager } from './util/rrManager';


process.on('unhandledRejection', console.error)
function parseConfiguration() : Config {
  let unparsedJSON = readFileSync(process.env.NODE_ENV === 'production' ? `${__dirname}/../config.json`: `${__dirname}/../config-dev.json`).toString()
  return JSON.parse(unparsedJSON)
}


console.log(process.env.NODE_ENV)
// Parse configuration file
const config = parseConfiguration()

const client = new Client({
  partials: ['MESSAGE', 'CHANNEL', 'REACTION']
})
const botCache = new BotCache()

botCache.set('helpConfig', JSON.parse(readFileSync(`${__dirname}/../help.json`).toString()))
botCache.set('config', config)

client.on('ready', async () => {
  console.log(`Logged in as ${client.user?.tag}`)

  client.user?.setPresence({
    status: 'online',
    activity: {
      name: `${config.prefix}help`,
      type: 'LISTENING'
    }
  })
  registerFont('./fonts/notosansjp/NotoSansJP-Regular.otf', {
    family: 'Noto Sans JP',
    weight: '400',
  })
  registerFont('./fonts/notosansjp/NotoSansJP-Bold.otf', {
    family: 'Noto Sans JP',
    weight: '700',
  })
  // Reset cooldowns

  db.delete('cooldowns')

  botCache.set('botID', client.user?.id)
})

client.on('message', message => {
  if (message.author.bot) return
  
  // Leveling
  if (message.guild && message.content.length > 2 && message.member)
    lvlSetup(message, message.member, message.guild.id)

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
  await runCaptcha(member)
})


// Handle reaction roles
client.on('messageReactionAdd', reactionAddHandler)
client.on('messageReactionRemove', reactionRemoveHandler)

const rrRoles = new ReactionRoleRoleManager()

client.on('messageDelete', msg => {
  handleDeletion(msg, rrRoles)
})

client.on('messageDeleteBulk', msgs => {

  msgs.forEach(m => {
    handleDeletion(m, rrRoles)
  })
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

      if (props.aliases) {
        props.aliases.forEach(alias => {
          commands[alias] = {
            run: props.run
          }
        })
      }
    })
  })
}




client.login(config.token)