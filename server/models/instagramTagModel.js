const mongoose = require('mongoose');
const schema = mongoose.Schema;

const instagramTagModel = new schema({
    _id: { 
        type: mongoose.Schema.Types.ObjectId
    },
    name: { 
        type: String,
        unique: true,
        required: true
    },
    pageId: { 
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
});

module.exports = mongoose.model('InstagramTag', instagramTagModel);