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

const entry = manifest['src/assets/scripts/index.js'];

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
    config.addNunjucksShortcode('codesandbox', shortcodes['codesandbox']);
    config.addNunjucksAsyncShortcode('img', shortcodes['img']);
    config.addNunjucksAsyncShortcode('photo', shortcodes['photo']);
    config.addNunjucksAsyncShortcode('svgiconsprite', svgiconsprite);

    // Returns the URL to a Vite-built asset. In Nunjucks templates:
    // {% asset 'js' %} or {% asset 'css' %}
    config.addShortcode('asset', function (type) {
        if (type === 'js') return `/${entry.file}`;
        if (type === 'css') return `/${entry.css[0]}`;
        throw new Error(`Unknown asset type: ${type}`);
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
    config.addPassthroughCopy({ 'src/assets/styles/posts': 'assets/styles/posts' });
    config.addPassthroughCopy('src/*.txt');
    config.addPassthroughCopy('src/*.webmanifest');
    config.addPassthroughCopy('CNAME');

    // Set Markdown libraries
    config.setLibrary('md', markdownIt({
        html: true
    }).use(markdownItFootnote));

    // Eleventy 2.x dev server: watch for asset rebuilds and serve 404 page
    config.setServerOptions({
        watch: ['public/assets/manifest.json'],
        showAllHosts: true,
    });

    return {
        dir: {
            input: 'src',
            output: 'public',
            includes: 'includes',
            layouts: 'layouts',
            data: 'data',
        },
        templateFormats: ['html', 'md', '11ty.js', 'json'],
        htmlTemplateEngine: 'njk',
        markdownTemplateEngine: 'njk',
    };
};
