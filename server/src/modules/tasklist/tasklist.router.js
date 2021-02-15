import express from 'express'
import feedback from '../../misc/feedback.js'
import { tasklistService } from './tasklist.service.js'

const router = express.Router()

router
  .get('/', async (request, response) => {
    const tasklists = await tasklistService.readAll()

    tasklists
      ? response.json({ tasklists })
      : response.send(feedback.empty('tasklists'))
  })
  .get('/:id', async (request, response) => {
    const { id } = request.params

    const tasklist = await tasklistService.readOne(id)

    tasklist
      ? response.json({ tasklist })
      : response.send(feedback.empty(`tasklist with id ${id}`))
  })
  .post('/create', async (request, response) => {
    const tasklist = await tasklistService.createOne(request.body)

    tasklist
      ? response.json({ tasklist })
      : response.send(feedback.notCreated('tasklist'))
  })
  .put('/:id/update', async (request, response) => {
    const { id } = request.params

    const tasklist = await tasklistService.updateOne(id, request.body)

    tasklist
      ? response.json({ tasklist })
      : response.send(feedback.notUpdated(`tasklist with id ${id}`))
  })
  .delete('/:id/delete', async (request, response) => {
    const { id } = request.params

    const tasklist = await tasklistService.deleteOne(id)

    tasklist
      ? response.json({ tasklist })
      : response.send(feedback.notDeleted(`tasklist with id ${id}`))
  })

export { router }
