import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'

export default ({ mode }) => {
  const plugins = [
    vue(),
    Components({ dirs: 'src/components' }),
    AutoImport({
      imports: ['vue'],
      dirs: ['src/store']
    })
  ]
  return defineConfig({
    server: {
      host: '0.0.0.0',
      proxy: {}
    },
    plugins,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  })
}
