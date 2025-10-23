import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import {viteMockServe} from 'vite-plugin-mock'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
// https://vite.dev/config/
export default defineConfig(({command}) => ({
    plugins: [
        viteMockServe({
            // default
            enable: command === 'serve',
            mockPath: 'mock',
            // localEnabled: command === 'serve',
        }),
        vue(),
        tailwindcss(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    }
}))
