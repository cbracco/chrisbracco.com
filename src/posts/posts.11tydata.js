module.exports = {
    eleventyComputed: {
        /**
         * Handle drafts and scheduled posts
         * https://github.com/11ty/eleventy/issues/26#issuecomment-791993563
         *
         * For production mode, if a post has `draft: true` in its YAML
         * frontmatter or it has a future date, then this snippet will set
         * `permalink: false` and exclude it from collections. This prevents the
         * post from being built.
         *
         * The actual publishing (aka building) of scheduled posts is handled
         * by GitHub Actions’ cron feature, which runs daily at 00:00 UTC.
         *
         * For dev mode, always render all posts.
         */
        permalink: (data) => {
            if (
                process.env.NODE_ENV === 'production' &&
                (data.draft || data.page.date >= new Date())
            ) {
                return false;
            }
            return data.permalink;
        },
        eleventyExcludeFromCollections: (data) => {
            if (
                process.env.NODE_ENV === 'production' &&
                (data.draft || data.page.date >= new Date())
            ) {
                return true;
            }
            return false;
        },
    },
};
