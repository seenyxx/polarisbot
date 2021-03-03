import { error } from 'console';
import { Client, Message, MessageEmbed } from 'discord.js';
import { coolDownSetup, hardPunish, pollEmojis, errorMessage, pollEmojisResolvable } from '../../lib';

let coolDown = 60
let commandName = 'poll'

export function run(client: Client, message: Message, args: Array<string>) {
  
  if (!message.member?.hasPermission('MANAGE_MESSAGES')) return message.channel.send(errorMessage('Insufficient permissions'))
  let _title = message.content.match(/\[.+\]/g)
  let options = message.content.match(/\([^()]+\)/g)
  if(!options || !_title) return
  
  if (!_title.length || !options.length) return message.channel.send(errorMessage(`Provide values for title and at least 2 options but no more than 10 options.\nFormat:\n<prefix>poll [Title of poll] (Option 1) (Option 2) ...`))
  
  if (coolDownSetup(message, commandName, coolDown)) return
  let title = _title[0].trim()

  let poll = new Poll(message, title, options)
  poll.sendEmbed().catch(errorMessage)
}

class Poll {
  readonly title: string
  readonly options: string[]
  private msg: Message

  constructor(msg: Message, title: string, options: string[]) {
    this.title = title
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
      msg.react(pollEmojisResolvable[i])
    }
  }
  
}