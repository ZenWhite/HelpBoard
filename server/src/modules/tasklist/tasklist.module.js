import { router } from './tasklist.router.js'
import { routes } from '../../routes.js'

const module = {
  router: {
    base: routes.tasklist,
    router
  }
}

export { module as tasklist }
