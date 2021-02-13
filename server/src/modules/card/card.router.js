import express from 'express'
import { cardService } from './card.service.js'

const router = express.Router()

const routes = {
  base: '/',
  create: '/create',
  update: '/update'
}

router
  .get(routes.base, async (request, response) => {
    const cards = await cardService.readAll()

    if (cards) return response.json({ cards })
    else return 'There is no cards!'
  })
  .post(routes.create, async (request, response) => {
    const card = await cardService.createOne(request.body)

    if (card) return response.json({ card })
    else return "Can't create card"
  })
  .put(routes.update, (request, response) => {
    response.json({ message: 'update card' })
  })

export { router }
