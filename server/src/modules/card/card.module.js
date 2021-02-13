import { router } from './card.router.js'
import { routes } from '../../routes.js'

const module = {
  router: {
    base: routes.card,
    router
  }
}

export { module as card }
