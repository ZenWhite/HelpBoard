import express from 'express'
import feedback from '../../misc/feedback.js'
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
  .delete('/:id/delete', async (request, response) => {
    const { id } = request.params

    const board = await boardService.deleteOne(id)

    return board
      ? response.json({ board })
      : response.send(feedback.notDeleted(`board with id ${id}`))
  })

export { router }
