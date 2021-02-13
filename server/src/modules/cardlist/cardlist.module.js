import { router } from './cardlist.router.js'
import { routes } from '../../routes.js'

const module = {
  router: {
    base: routes.cardlist,
    router
  }
}

export { module as cardlist }
