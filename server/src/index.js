import express from 'express'
import bootstrap from './misc/bootstrap.js'

import { server } from './modules/server/server.module.js'
import { task } from './modules/task/task.module.js'
import { tasklist } from './modules/tasklist/tasklist.module.js'
import { board } from './modules/board/board.module.js'

const app = express()

app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true }))
app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', 'http://localhost:1234')
  next()
})

const modules = {
  server,
  task,
  tasklist,
  board
}

bootstrap(app, modules, (PORT) =>
  console.log(`\nserver started on port ${PORT}`)
)
