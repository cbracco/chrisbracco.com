import { defineConfig } from 'vite';

export default defineConfig({
    publicDir: false,
    build: {
        // cssnano in postcss.config.js handles CSS minification for production
        cssMinify: false,
        outDir: 'public',
        emptyOutDir: false,
        assetsDir: 'assets',
        manifest: 'assets/manifest.json',
        rollupOptions: {
            input: 'src/assets/scripts/index.js',
        },
    },
});
