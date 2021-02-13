import { router } from './server.router.js'
import { routes } from '../../routes.js'

const module = {
  router: {
    base: routes.server,
    router
  }
}

export { module as server }
