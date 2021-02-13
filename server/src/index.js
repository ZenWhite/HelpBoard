import express from 'express'
import bootstrap from './misc/bootstrap.js'

import { server } from './modules/server/server.module.js'
import { card } from './modules/card/card.module.js'
import { cardlist } from './modules/cardlist/cardlist.module.js'

const app = express()

const modules = {
  server,
  card,
  cardlist
}

bootstrap(app, modules, (PORT) =>
  console.log(`\nserver started on port ${PORT}`)
)
