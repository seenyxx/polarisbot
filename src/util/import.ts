import db from 'quick.db'
import { Database } from 'quickmongo'

const mongo = new Database(
  process.env.NODE_ENV === 'production'
    ? require('../../config.json').db
    : require('../../config-dev.json').db
)

function importData() {
  const data = db.all()
  mongo.import(data).then(() => {
    console.log('Done!')
  })
}

mongo.on('ready', () => importData())
