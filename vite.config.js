import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
    const isProd = mode === 'production';
    return {
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
                output: {
                    // No hashes in dev so the manifest stays stable between rebuilds
                    entryFileNames: isProd ? 'assets/[name]-[hash].js' : 'assets/[name].js',
                    assetFileNames: isProd ? 'assets/[name]-[hash][extname]' : 'assets/[name][extname]',
                },
            },
        },
    };
});
