import { Message } from "discord.js";

const defaultDateTags: tagObj[] = [
  {
    name: 'date.utc',
    run: () => { return new Date().toUTCString() }
  },
  {
    name: 'date.now',
    run: () => { return Date.now().toString() }
  },
  {
    name: 'date.iso',
    run: () => { return new Date().toISOString() }
  }
]

const defaultMessageTags: msgTagObj[] = [
  {
    name: 'msg.author',
    run: (msg: Message) => { return msg.author.tag }
  },
  {
    name: 'msg.author.id',
    run: (msg: Message) => { return msg.author.id }
  },
  {
    name: 'msg.author.mention',
    run: (msg: Message) => { return `<@${msg.author.id}>`}
  },
  {
    name: 'msg.author.profile',
    run: (msg: Message) => { return msg.author.displayAvatarURL() }
  },
  {
    name: 'msg.channel.id',
    run: (msg: Message) => { return msg.channel.id}
  },
  {
    name: 'msg.guild',
    run: (msg: Message) => { return msg.guild ? msg.guild.name : 'This is not a guild' }
  },
  {
    name: 'msg.guild.id',
    run: (msg: Message) => { return msg.guild ? msg.guild.id : 'This is not a guild'}
  },
  {
    name: 'msg.content',
    run: (msg: Message) => { return msg.cleanContent }
  }
]

const defaultActions: msgActionObj[] = [
  {
    name: 'msg.delete',
    run: (msg: Message) => { if (msg.deletable) msg.delete() }
  }
]

export interface tagObj {
  name: string,
  run: () => string
}

type msgTagRun = (msg: Message) => string

export interface msgTagObj {
  name: string,
  run: msgTagRun
}

type msgActionRun = (msg: Message) => void

export interface msgActionObj {
  name: string,
  run: msgActionRun
}

export interface tagObjAny {
  name: string,
  run: (msg?: Message) => any
}

export async function parseDefualtInterpolator(text: string, msg?: Message) {
  for (let i = 0; i < defaultDateTags.length; i++) {
    let dateProps = defaultDateTags[i]

    text.replaceAll(`{${dateProps.name.trim()}}`, dateProps.run())
  }
  if (msg)
    for (let i = 0; i < defaultMessageTags.length; i++) {
      let msgProps = defaultMessageTags[i]

      text.replaceAll(`{${msgProps.name.trim()}}`, msgProps.run(msg))
    }

  if (msg) 
    for (let i = 0; i < defaultActions.length; i++) {
      let actionsProps = defaultActions[i]

      if (text.includes(`{${actionsProps.name.trim()}}`))
        actionsProps.run(msg)
    }
  return text
}

export async function parseCustomInterpolator(text: string, tagObj: tagObjAny, msg?: Message) {
  if (msg) 
    text.replaceAll(`{${tagObj.name.trim()}}`, tagObj.run(msg))
  else
    text.replaceAll(`{${tagObj.name.trim()}}`, tagObj.run())
}

export async function parseCustomAction(msg: Message, tagName: string, action: msgActionRun) {
  if (msg.content.includes(tagName.trim()))
    action(msg)
}