import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/scss/main.scss',  // Input SCSS file
                'resources/js/site.js'       // Input JS file
            ],
            refresh: true,
        }),
    ],
    build: {
        rollupOptions: {
            output: {
                entryFileNames: 'js/[name].js',
                chunkFileNames: 'js/[name].js',
                assetFileNames: ({ name }) => {
                    if (name.endsWith('.css')) {
                        return 'css/[name].[hash].css';  // Output to public/build/css with hash
                    }
                    return 'assets/[name].[ext]';
                },
            },
        },
    },
});
