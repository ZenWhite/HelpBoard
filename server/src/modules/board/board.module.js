import { router } from './board.router.js'
import { routes } from '../../routes.js'

const module = {
  router: {
    base: routes.board,
    router
  }
}

export { module as board }
