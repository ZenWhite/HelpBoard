import express from 'express'
import { routes } from './routes.js'
import './services/prisma/module.js'

const server = express()

const PORT = 3000

server.get(routes.home, (request, response) => response.send('Hi!'))

server.listen(PORT, () => console.log(`Server started on port ${PORT}`))
