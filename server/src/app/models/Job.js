const mongoose = require('mongoose');

const Job = mongoose.Schema({
    name: { type: String, unique: true },
});

module.exports = mongoose.model('Job', Job);
