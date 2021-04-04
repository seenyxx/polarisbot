import { Client, Message } from 'discord.js'
import { freemem, totalmem } from 'os'
import { cpuUsage } from 'os-utils'

import { coolDownSetup, simpleEmbed } from '../../util/lib'

let coolDown = 10
let commandName = 'metrics'
export async function run(
  client: Client,
  message: Message,
  args: Array<string>
) {
  if (coolDownSetup(message, commandName, coolDown)) return

  const embed = simpleEmbed('blue', 'Metrics 📊', '')

  embed.addField('Process CPU Usage', `\`${getCpuUsage()}%\``, true)
  embed.addField(
    'Process Memory Usage',
    `\`${heapInMB(process.memoryUsage().heapUsed)}MB\``,
    true
  )
  embed.addField(
    'System Memory Usage',
    `\`${heapInMB(totalmem()) - heapInMB(freemem())}MB / ${heapInMB(
      totalmem()
    )}MB\``,
    true
  )

  message.channel.send(embed)
}

function heapInMB(memory: number) {
  return Math.floor(memory / (1000 * 1000))
}

function getCpuUsage() {
  let percentage = 0
  cpuUsage(p => {
    percentage = p
  })

  return percentage
}
