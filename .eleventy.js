const fg = require('fast-glob');
const fs = require('fs');
const markdownIt = require('markdown-it');
const markdownItFootnote = require('markdown-it-footnote');
const navigation = require('@11ty/eleventy-navigation');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const path = require('path');

const filters = require('./utils/filters.js');
const shortcodes = require('./utils/shortcodes.js');
const svgiconsprite = require('./utils/svgiconsprite.js');
const rss = require('@11ty/eleventy-plugin-rss');

const manifestPath = path.resolve(
    __dirname,
    'public',
    'assets',
    'manifest.json'
);
const manifest = JSON.parse(
    fs.readFileSync(manifestPath, { encoding: 'utf8' })
);

const photos = fg.sync(['**/photos/*', '!**/public']);

module.exports = function (config) {
    // Plugins
    config.addPlugin(navigation);
    config.addPlugin(rss);
    config.addPlugin(syntaxHighlight, {
        templateFormats: ['njk', 'md']
    });

    // Filters
    Object.keys(filters).forEach((filterName) => {
        config.addFilter(filterName, filters[filterName]);
    });

    // Shortcodes
    config.addNunjucksShortcode('codepen', shortcodes['codepen']);
    config.addNunjucksAsyncShortcode('img', shortcodes['img']);
    config.addNunjucksAsyncShortcode('photo', shortcodes['photo']);
    config.addNunjucksAsyncShortcode('svgiconsprite', svgiconsprite);

    // Adds a universal shortcode to return the URL to a webpack asset. In Nunjack templates:
    // {% webpackAsset 'main.js' %} or {% webpackAsset 'main.css' %}
    config.addShortcode('webpackAsset', function (name) {
        if (!manifest[name]) {
            throw new Error(
                `The asset ${name} does not exist in ${manifestPath}`
            );
        }
        return manifest[name];
    });

    // Collections
    config.addCollection('posts', require('./utils/collections/posts'));
    config.addCollection('pinned', require('./utils/collections/pinned'));
    config.addCollection('tagList', require('./utils/collections/tagList'));
    config.addCollection(
        'pagedPosts',
        require('./utils/collections/pagedPosts')
    );
    config.addCollection(
        'pagedPostsByTag',
        require('./utils/collections/pagedPostsByTag')
    );
    config.addCollection('photos', function() {
        return photos;
    });

    // Static assets to pass through
    config.addPassthroughCopy({ 'src/assets/images': 'assets/images' });
    config.addPassthroughCopy({ 'src/assets/audio': 'assets/audio' });
    config.addPassthroughCopy('*.txt');

    // Set Markdown libraries
    config.setLibrary('md', markdownIt({
        html: true
    }).use(markdownItFootnote));

    config.setBrowserSyncConfig({
        // Assets manifest
        files: ['public/assets/manifest.json'],
        // 404 page when serving production build locally
        callbacks: {
            ready: function (_err, browserSync) {
                const content_404 = fs.readFileSync('public/404/index.html');

                browserSync.addMiddleware('*', (_req, res) => {
                    // Provides the 404 content without redirect.
                    res.write(content_404);
                    res.end();
                });
            },
        },
    });

    // Deep-Merge data
    config.setDataDeepMerge(true);

    return {
        dir: {
            input: 'src',
            output: 'public',
            // these are relative to `dir.input`
            includes: 'includes',
            layouts: 'layouts',
            data: 'data',
        },
        passthroughFileCopy: true,
        templateFormats: ['html', 'md', '11ty.js', 'json'],
        htmlTemplateEngine: 'njk',
        markdownTemplateEngine: 'njk',
    };
};
