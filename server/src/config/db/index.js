const mongoose = require('mongoose');
const URI =
    'mongodb+srv://ndhs824:0123456789@clusterdefault.hin81jd.mongodb.net/ReducerGlobal';

const connect = async () => {
    await mongoose
        .connect(URI)
        .then(() => console.log('Connect to database done'))
        .catch((err) => console.log(err));
};

module.exports = connect;
