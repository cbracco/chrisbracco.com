module.exports = (collection) =>
    collection.getAll().filter((item) => 'pinned' in item.data);
