module.exports = (collection) => {
    const posts = [...collection.getFilteredByGlob('src/posts/*.md')];
    return posts.reverse();
};
