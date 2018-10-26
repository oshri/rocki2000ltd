const mongoose = require('mongoose');
const schema = mongoose.Schema;

const pageTagModel = new schema({
	name: {
		type: String,
		required: true
	},
	pageId: {
        type: String,
        required: false
	}
});

module.exports = mongoose.model('PageTag', pageTagModel);