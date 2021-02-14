import express from 'express'
import { taskService } from './task.service.js'

const router = express.Router()

const routes = {
  base: '/',
  create: '/create',
  update: '/update'
}

router
  .get(routes.base, async (request, response) => {
    const tasks = await taskService.readAll()

    if (tasks) return response.json({ tasks })
    else return 'There is no tasks!'
  })
  .post(routes.create, async (request, response) => {
    const task = await taskService.createOne(request.body)

    if (task) return response.json({ task })
    else return "Can't create task"
  })
  .put(routes.update, (request, response) => {
    response.json({ message: 'update task' })
  })

export { router }
