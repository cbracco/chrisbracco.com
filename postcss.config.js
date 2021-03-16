const plugins = [
    require('postcss-import')({
        path: 'src/assets/styles',
    }),
    require('postcss-preset-env')({
        features: {
            'custom-media-queries': true,
            'custom-properties': true,
            'custom-selectors': true,
            'prefers-color-scheme-query': true,
            'nesting-rules': true,
        },
    }),
];

if (process.env.NODE_ENV === 'production') {
    plugins.push(require('cssnano'));
}

module.exports = { plugins };
