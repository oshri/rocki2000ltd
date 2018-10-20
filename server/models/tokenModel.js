const mongoose = require('mongoose');
const schema = mongoose.Schema;

const tokenModel = new schema({
    _id: { 
        type: mongoose.Schema.Types.ObjectId
    },
    email: {
        type: String
    },
    expires: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Token', tokenModel);