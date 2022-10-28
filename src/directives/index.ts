import type { App } from 'vue'
import { setupWavesDirective } from './waves'

export function setupGlobDirectives(app: App) {
  setupWavesDirective(app)
}
