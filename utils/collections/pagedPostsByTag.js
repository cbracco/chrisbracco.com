const siteData = require('../../src/data/site');

module.exports = (collection) => {
    const tagList = require('./tagList')(collection);

    const maxPostsPerPage = siteData.paginate;
    const pagedPosts = [];

    Object.keys(tagList).forEach((tagName) => {
        const taggedPosts = [...collection.getFilteredByTag(tagName)].reverse();
        const numberOfPages = Math.ceil(taggedPosts.length / maxPostsPerPage);

        for (let pageNum = 1; pageNum <= numberOfPages; pageNum++) {
            const sliceFrom = (pageNum - 1) * maxPostsPerPage;
            const sliceTo = sliceFrom + maxPostsPerPage;

            pagedPosts.push({
                tagName,
                number: pageNum,
                posts: taggedPosts.slice(sliceFrom, sliceTo),
                first: pageNum === 1,
                last: pageNum === numberOfPages,
            });
        }
    });

    return pagedPosts;
};
