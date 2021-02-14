import express from 'express'
import { boardService } from './board.service.js'

const router = express.Router()

router
  .get('/', async (request, response) => {
    const boards = await boardService.readAll()

    return boards
      ? response.json({ boards })
      : response.send(feedback.empty('boards'))
  })
  .get('/:id', async (request, response) => {
    const { id } = request.params

    const board = await boardService.readOne(id)

    return board
      ? response.json({ board })
      : response.send(feedback.empty(`board with id ${id}`))
  })
  .post('/create', async (request, response) => {
    const board = await boardService.createOne(request.body)

    return board
      ? response.json({ board })
      : response.send(feedback.notCreated('board'))
  })
  .put('/:id/update', async (request, response) => {
    const { id } = request.params

    const board = await boardService.updateOne(id, request.body)

    return board
      ? response.json({ board })
      : response.send(feedback.notUpdated(`board with id ${id}`))
  })

export { router }
