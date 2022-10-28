import { createApp } from 'vue'
// Register icon sprite
import 'virtual:svg-icons-register'
import '@unocss/reset/tailwind.css'
// import styles
import '~/styles/index'
import 'uno.css'
import App from './App.vue'
import { router, setupRouter } from '~/router/index'
import { setupRouterGuard } from '~/router/guard/index'
import { setupGlobDirectives } from '~/directives/index'

function bootStrap() {
  const app = createApp(App)

  // 注册全局指令
  setupGlobDirectives(app)

  // 安装路由守卫
  setupRouterGuard(router)

  // 安装路由
  setupRouter(app)

  app.mount('#app')
}

bootStrap()
