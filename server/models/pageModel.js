const mongoose = require('mongoose');
const schema = mongoose.Schema;

const pageModel = new schema({
    _id: { type: mongoose.Schema.Types.ObjectId } ,
    name: { type: String},
    description: { type: String}
});

module.exports = mongoose.model('Page', pageModel);