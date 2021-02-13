import express from 'express'

const router = express.Router()

const routes = {
  base: '/',
  create: '/create',
  update: '/update'
}

router
  .get(routes.base, (request, response) => {
    response.json({ message: 'read cardlist' })
  })
  .post(routes.create, (request, response) => {
    response.json({ message: 'create cardlist' })
  })
  .put(routes.update, (request, response) => {
    response.json({ message: 'update cardlist' })
  })

export { router }
