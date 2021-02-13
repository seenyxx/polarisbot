import { Client } from 'discord.js'
import { readdir, readFileSync } from 'fs'
import { createServer } from 'http'
import { noGif } from './lib'
import { Command, Commands, Config } from './types'

function parseConfiguration() : Config {
  if (!process.env.PREFIX) process.exit(1)
  if (!process.env.TOKEN) process.exit(1)

  return {
    prefix: process.env.PREFIX,
    token: process.env.TOKEN
  }
}

// Parse configuration file
const config = parseConfiguration()

const client = new Client()

client.on('ready', () => {
  console.log(`Logged in as ${client.user?.tag}`)
})

client.on('message', message => {
  if (message.author.bot) return

  // Get rid of gifs from /tenor or /giphy
  noGif(message)


  if (message.content.indexOf(config.prefix) !== 0) return

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift()?.toLowerCase();


  if (!command) return
  
  // Get the command to run
  const cmd = commands[command]

  cmd.run(client, message, args)
})



const commands: Commands  = {}

// Command Loader

readdir(`${__dirname}/commands/`, (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith('.js')) return;
    let props: Command = require(`${__dirname}/commands/${file}`);
    let commandName = file.split('.')[0];
    console.log(`Loading command ${commandName}`);

    commands[commandName] = props
  });
});


client.login(config.token)

const server = createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('ONLINE')
})

server.listen(parseInt(process.env.PORT ? process.env.PORT : '3000'), '0.0.0.0', () => {
  console.log(`Server running at http://127.0.0.1:80/`)
})