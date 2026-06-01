import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';

// In dev, Vite is the server. This plugin serves Eleventy's HTML output
// through transformIndexHtml, which injects the HMR client automatically.
function eleventyPlugin() {
    return {
        name: 'eleventy',
        configureServer(server) {
            // Serve Eleventy's HTML output with Vite's HMR injection
            server.middlewares.use(async (req, res, next) => {
                const url = (req.url ?? '/').split('?')[0];

                // Let Vite handle its own internal requests and non-HTML assets
                if (url.startsWith('/@') || url.startsWith('/node_modules') || path.extname(url)) {
                    return next();
                }

                // Resolve to an HTML file in public/
                const candidates = [
                    path.join('public', url, 'index.html'),
                    path.join('public', url.replace(/\/$/, '') + '.html'),
                ];
                const htmlPath = candidates.find(fs.existsSync);

                if (htmlPath) {
                    const raw = fs.readFileSync(htmlPath, 'utf-8');
                    const html = await server.transformIndexHtml(url, raw);
                    res.setHeader('Content-Type', 'text/html');
                    res.end(html);
                } else {
                    next();
                }
            });

            // Full page reload whenever Eleventy rebuilds an HTML file
            server.watcher.add(path.resolve('public'));
            server.watcher.on('change', (file) => {
                if (file.endsWith('.html')) {
                    server.hot.send({ type: 'full-reload' });
                }
            });
        },
    };
}

export default defineConfig(({ mode }) => {
    const isProd = mode === 'production';
    return {
        // In dev, serve static assets (images, audio, etc.) from Eleventy's output
        publicDir: isProd ? false : 'public',
        plugins: isProd ? [] : [eleventyPlugin()],
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
                    entryFileNames: isProd ? 'assets/[name]-[hash].js' : 'assets/[name].js',
                    assetFileNames: isProd ? 'assets/[name]-[hash][extname]' : 'assets/[name][extname]',
                },
            },
        },
    };
});
