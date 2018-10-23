const mongoose = require('mongoose');
const schema = mongoose.Schema;

const pageModel = new schema({
	name: {
		type: String,
		unique: true,
		required: true
	},
	description: {
        type: String,
        required: false
	},
	parent: {
        type: String,
        required: false
	},
	active: {
        type: Boolean,
        required: false,
		default: true
	}
});

module.exports = mongoose.model('Page', pageModel);

// const pageModel = new schema({
//     _id: {
//         type: mongoose.Schema.Types.ObjectId
//     },
//     name: {
//         type: String,
//         unique: true,
//         required: true
//     },
//     link: {
//         type: String
//     },
//     description: {
//         type: String
//     },
//     active: {
//         type: Boolean,
//         default: true
//     },
//     parent: {
//         type: String
//     }
// });
