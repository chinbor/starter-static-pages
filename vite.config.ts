import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import autoprefixer from 'autoprefixer'
import Pages from 'vite-plugin-pages'
import Unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default () => {
  return defineConfig({
    plugins: [
      Vue({
        // vue3最新的语法 ，例如 直接 $ref() $reactive()
        // https://vuejs.org/guide/extras/reactivity-transform.html#reactivity-transform
        reactivityTransform: true,
      }),

      // https://github.com/antfu/unplugin-auto-import
      AutoImport({
        // 预先导入的一些方法（之后可以写vuex、pinia）
        imports: [
          'vue',
          'vue/macros',
          '@vueuse/core',
          'vue-router',
          'pinia',
          // https://www.naiveui.com/zh-CN/os-theme/docs/import-on-demand
          {
            'naive-ui': [
              'useDialog',
              'useMessage',
              'useNotification',
              'useLoadingBar',
            ],
          },
        ],
        dts: true,
        dirs: [
          './src/composables',
        ],
        // 是否允许在模板中使用导入的api
        vueTemplate: true,
      }),

      // https://github.com/antfu/vite-plugin-components
      Components({
        dts: true,
        // 自动导入哪些目录下的组件（src/components目录）
        dirs: ['src/components'],
        // 后缀vue组件
        extensions: ['vue'],
        // 以下两项 支持 Demo/index.vue 的形式声明组件的导入（最终组件名称是Demo）
        directoryAsNamespace: true,
        collapseSamePrefixes: true,
        // https://www.naiveui.com/zh-CN/os-theme/docs/import-on-demand
        resolvers: [NaiveUiResolver()],
      }),

      // https://github.com/antfu/unocss
      // see unocss.config.ts for config
      Unocss(),

      // https://github.com/vbenjs/vite-plugin-svg-icons/blob/main/README.zh_CN.md
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        // 指定symbolId格式
        symbolId: 'icon-[name]',
      }),

      // https://github.com/hannoeru/vite-plugin-pages
      Pages({
        extensions: ['vue'],
        // pages中的components目录、configs目录不起作用
        exclude: ['**/components/**', '**/configs/**'],
      }),
    ],

    resolve: {
      alias: {
        '~/': `${path.resolve(__dirname, 'src')}/`,
      },
    },

    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/styles/index.scss" as *;',
        },
      },
      postcss: {
        plugins: [
          autoprefixer(),
        ],
      },
    },
  })
}
