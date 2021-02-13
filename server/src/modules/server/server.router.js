import express from 'express'

const router = express.Router()

const routes = {
  base: '/'
}

router.get(routes.base, (request, response) => {
  response.json({ message: 'Hi!' })
})

export { router }
