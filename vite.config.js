import { defineConfig } from 'vite';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url'
import handlebars from 'vite-plugin-handlebars'

const __filename = fileURLToPath(import.meta.url)
const __dirname  = dirname(__filename)

export default defineConfig({
  
    base: '/Web-programming/', 

    plugins: [
        handlebars({
            partialDirectory: resolve(__dirname, 'src', 'partials'),
            context: { siteName: 'Лабораторна 6', labName: 'Лабораторна № 6' },
            reloadOnPartialChange: true
        }),
    ],
    resolve: { alias: { '@': resolve(__dirname, 'src') } },
    build: {
        // ✅ ВИПРАВЛЕННЯ 2 (Опціонально): Переконайтеся, що ви використовуєте папку dist/ для деплою. 
        // Якщо ви не деплоїте dist/, то вам потрібно або змінити outDir на іншу папку
        // (наприклад, 'docs'), або вручну завантажити вміст dist/ на сервер.
        // Залишаю outDir стандартним, якщо ви використовуєте GitHub Actions або аналогічний деплой.
        // outDir: 'dist', 
        rollupOptions: {
            input: {
                main:      resolve(__dirname, 'index.html'),
                about:     resolve(__dirname, 'about.html'),
                contacts: resolve(__dirname, 'contacts.html'),
            },
        },
    },
});