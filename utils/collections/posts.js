module.exports = (collection) => {
    // https://remysharp.com/2019/06/26/scheduled-and-draft-11ty-posts
    const now = new Date();
    const livePosts = p => p.date <= now;
    return collection.getFilteredByGlob('src/posts/*.md')
      .filter(livePosts).reverse();
};
