import { error } from 'console';
import { Client, Message, MessageEmbed } from 'discord.js';
import { coolDownSetup, hardPunish, pollEmojis, errorMessage } from '../../lib';

let coolDown = 60
let commandName = 'poll'

export function run(client: Client, message: Message, args: Array<string>) {
  

  let _title = message.content.match(/\[.+\]/g)
  let _options = message.content.match(/\(.+\)/g)
  if(!_options || !_title) return
  
  if (!_title.length || !_options.length) return message.channel.send(errorMessage(`Provide values for title and at least 2 options.\nFormat:\n<prefix>poll [Title of poll] (Option 1) (Option 2) ...`))
  
  if (coolDownSetup(message, commandName, coolDown)) return
  let title = _title[0].trim()
  let options = _options[0].split(' ')

  let poll = new Poll(message, title, options)
  poll.sendEmbed()
}

class Poll {
  readonly title: string
  readonly options: string[]
  private msg: Message

  constructor(msg: Message, title: string, options: string[]) {
    this.title = title
    console.log(options)
    this.options = options
    this.msg = msg
  }

  public getEmbed() {
    let embed = new MessageEmbed({
      color: 'BLURPLE',
      title: `Poll: *\`${this.title.replace('[', '').replace(']', '')}\`*`
    })

    embed.setAuthor(this.msg.author.tag, this.msg.author.displayAvatarURL())

    for (let i = 0; i < this.options.length; i++) {
      embed.addField(`Option ${pollEmojis[i]}`, this.options[i].replace('(', '').replace(')', ''), this.options.length < 5 ? false : true)
    }
    
    return embed
  }
  public async sendEmbed() {
    let embed = this.getEmbed()

    let msg = await this.msg.channel.send(embed)
    
    for (let i = 0; i < this.options.length; i++) {
      msg.react(pollEmojis[i].replace(':', ''))
    }
  }
  
}