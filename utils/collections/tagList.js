function fromEntries(iterable) {
    return [...iterable].reduce((obj, [key, val]) => {
        obj[key] = val;

        return obj;
    }, {});
}

module.exports = (collection) => {
    const posts = require('./posts')(collection);

    const tagListArr = posts
        .reduce((tags, post) => {
            if ('tags' in post.data) {
                tags = tags.concat(post.data.tags);
            }

            return [...new Set(tags)];
        }, [])
        .map((tag) => [tag, collection.getFilteredByTag(tag).length])
        .sort((a, b) => (a[0] < b[0]) ? -1 : (a[0] > b[0]) ? 1 : 0); // alpha
        // .sort((a, b) => b[1] - a[1]); // most to least

    return fromEntries(tagListArr);
};
