const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userModel = new schema({
    _id: { 
        type: mongoose.Schema.Types.ObjectId
    },
    firstName: { 
        type: String,
        required: true
    },
    lastName: { 
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ['user','admin'],
        default: 'user',
    },
    email: {
        type: String,
        unique: true,
        match: [/.+\@.+\..+/, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', userModel);