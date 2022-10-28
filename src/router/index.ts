import type { App } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import generatedRoutes from '~pages'

export const router = createRouter({
  history: createWebHashHistory('/'),
  routes: generatedRoutes,
})

export function setupRouter(app: App<Element>) {
  app.use(router)
}
