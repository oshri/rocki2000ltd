const mongoose = require('mongoose');
const schema = mongoose.Schema;

const appModel = new schema({
	name: {
		type: String,
		unique: true,
		required: true
	},
	description: {
		type: String,
		required: false
	},
	instagram: {
        accessToken: {
            type: String,
            required: false
        }
	}
});

module.exports = mongoose.model('App', appModel);