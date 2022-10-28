import type { Theme } from '@unocss/preset-uno'
import { defineConfig, presetAttributify, presetUno, transformerDirectives, transformerVariantGroup } from 'unocss'

// BUG: 这里的类型文件存在问题，所以自己显示的引入 Theme 类型
export default defineConfig<Theme>({
  theme: {
    fontFamily: {},
    animation: {
      keyframes: {
        fade: `{
          0% { opacity: 0; }
          100% { opacity: 1; }
        }`,
      },
      timingFns: {
        fade: 'linear',
      },
      durations: {
        fade: '0.3s',
      },
    },
  },
  shortcuts: [
    ['btn-1', 'px-24px py-8px rounded inline-block bg-[#B18E56] text-white cursor-pointer text-24px tracking-3.6px indent-3.6px'],
    ['btn-2', 'px-24px py-8px rounded inline-block bg-[#ffffff] text-[#58C0A8] cursor-pointer text-24px tracking-3.6px indent-3.6px shadow-btn'],
  ],
  rules: [
    ['transition-nav', { transition: 'all linear .2s' }],
    ['transition-dot', { transition: 'width 0.3s, background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }],
    ['shadow-nav', { 'box-shadow': '0 4px 4px 0 rgba(0,0,0,0.15)' }],
    ['shadow-btn', { 'box-shadow': '0 4px 10px 0 rgba(0,0,0,0.1)' }],
  ],
  presets: [
    // https://github.com/unocss/unocss/tree/main/packages/preset-uno
    // windiCss | tailwindcss 风格
    presetUno(),
    // https://github.com/unocss/unocss/tree/main/packages/preset-attributify
    // 属性样式
    presetAttributify(),
  ],
  transformers: [
    // https://github.com/unocss/unocss/tree/main/packages/transformer-directives
    transformerDirectives(),
    // https://github.com/unocss/unocss/tree/main/packages/transformer-variant-group
    transformerVariantGroup(),
  ],
})
