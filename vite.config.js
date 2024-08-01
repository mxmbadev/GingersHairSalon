import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/scss/main.scss', // Entry point for your SCSS
                'resources/js/site.js'
            ],
            refresh: true,
        }),
    ],
    base: process.env.NODE_ENV === 'production' ? '/' : '/',
});
