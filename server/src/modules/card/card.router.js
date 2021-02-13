import express from 'express'

const router = express.Router()

const routes = {
  base: '/',
  create: '/create',
  update: '/update'
}

router
  .get(routes.base, (request, response) => {
    response.json({ message: 'read card' })
  })
  .post(routes.create, (request, response) => {
    response.json({ message: 'create card' })
  })
  .put(routes.update, (request, response) => {
    response.json({ message: 'update card' })
  })

export { router }
