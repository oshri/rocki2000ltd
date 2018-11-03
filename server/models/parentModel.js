const mongoose = require('mongoose');
const schema = mongoose.Schema;

const ParentModel = new schema({
	id: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('Parent', ParentModel);