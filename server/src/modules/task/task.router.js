import express from 'express'
import feedback from '../../misc/feedback.js'
import { taskService } from './task.service.js'

const router = express.Router()

router
  .get('/', async (request, response) => {
    const tasks = await taskService.readAll()

    tasks ? response.json({ tasks }) : response.send(feedback.empty('tasks'))
  })
  .get('/:id', async (request, response) => {
    const { id } = request.params

    const task = await taskService.readOne(id)

    task
      ? response.json({ task })
      : response.send(feedback.empty(`task with id ${id}`))
  })
  .post('/create', async (request, response) => {
    const task = await taskService.createOne(request.body)

    task ? response.json({ task }) : response.send(feedback.notCreated('task'))
  })
  .put('/:id/update', async (request, response) => {
    const { id } = request.params

    const task = await taskService.updateOne(id, request.body)

    task
      ? response.json({ task })
      : response.send(feedback.notUpdated(`task with id ${id}`))
  })
  .delete('/:id/delete', async (request, response) => {
    const { id } = request.params

    const task = await taskService.deleteOne(id)

    task
      ? response.json({ task })
      : response.send(feedback.notDeleted(`task with id ${id}`))
  })

export { router }
