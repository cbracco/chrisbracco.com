const fs = require('fs');

module.exports = class {
    data() {
        return {
            pagination: {
                data: 'collections.posts',
                size: 1,
                alias: 'post',
            },
            eleventyExcludeFromCollections: true,
            permalink: ({ post }) => post.url.replace(/\/$/, '') + '.md',
        };
    }

    render({ post }) {
        return fs.readFileSync(post.inputPath, 'utf8');
    }
};
