import type { Router } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: true })

function createProgressGuard(router: Router) {
  router.beforeEach((to, from) => {
    if (to.path !== from.path)
      NProgress.start()

    document.title = to.meta.title ? `${to.meta.title} - 乙元食品` : '乙元食品'
  })

  router.afterEach(() => {
    NProgress.done()
  })
}

export function setupRouterGuard(router: Router) {
  createProgressGuard(router)
}
