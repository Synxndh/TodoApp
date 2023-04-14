const multipleToObject = (arr) => {
    return arr.map((item) => item.toObject());
};

const singleToObject = (item) => {
    return item.toObject();
};

module.exports = { multipleToObject, singleToObject };
