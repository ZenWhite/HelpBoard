import { router } from './task.router.js'
import { routes } from '../../routes.js'

const module = {
  router: {
    base: routes.task,
    router
  }
}

export { module as task }
