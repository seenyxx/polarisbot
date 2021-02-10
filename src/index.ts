import { Client } from 'discord.js'
import { readdir, readFileSync } from 'fs'
import { createServer } from 'http'
import { noAnnoyingTTS, noEmojiSpam, noGif, noTextSpam } from './lib'
import { Command, Commands, Config } from './types'

function parseConfiguration() : Config {
  let unparsedJSON = readFileSync(`${__dirname}/../config.json`).toString()
  return JSON.parse(unparsedJSON)
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
  // Set character limit to 1000 in message
  noTextSpam(message)
  // Get rid of those pesky emoji spammers
  noEmojiSpam(message)
  // Get rid of annoying TTS messages and sets TTS character limit to 150
  noAnnoyingTTS(message)

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

// const server = createServer((req, res) => {
//   res.statusCode = 200
//   res.setHeader('Content-Type', 'text/plain')
//   res.end(client.user?.tag)
// })

// server.listen(80, '127.0.0.1', () => {
//   console.log(`Server running at http://127.0.0.1:80/`);
// });