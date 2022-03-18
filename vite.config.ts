import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    // 暴露本地服务到局域网
    server:{
        host: '0.0.0.0',
        proxy: {
            '/api': {
              target: 'https://data.cyberpop.online/', //实际请求地址
              changeOrigin: true,
              rewrite: (path) => path.replace(/^\/api/, '')
            },
            '/text': {
                target: 'https://d2cimmz3cflrbm.cloudfront.net/', //实际请求地址
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            },
        },
    },
    define: {
        'process.env': {},
    },
    resolve: {
        alias: {
            '@': '/src/',
            // '@': path.resolve(__dirname, 'src'),
            // process: 'process/browser',
            // stream: 'stream-browserify',
            // zlib: 'browserify-zlib',
            // util: 'util',
            'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js'
        },
    },
    
})
