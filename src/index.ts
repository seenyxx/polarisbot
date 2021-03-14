import { ShardingManager } from 'discord.js';
import { readFileSync } from 'fs';
import { Config } from './types';

function parseConfiguration() : Config {
  let unparsedJSON = readFileSync(process.env.NODE_ENV === 'production' ? `${__dirname}/../config.json`: `${__dirname}/../config-dev.json`).toString()
  return JSON.parse(unparsedJSON)
}
const config = parseConfiguration()
const manager = new ShardingManager(`${__dirname}/bot.js`, {
  token: config.token
})
manager.on('shardCreate', s => console.log(`Launched shard ${s.id}`))
manager.spawn()