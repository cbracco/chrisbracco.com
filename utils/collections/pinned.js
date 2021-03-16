module.exports = (collection) => {
    return collection.getAll().filter(function (item) {
        return 'pinned' in item.data;
    });
};
