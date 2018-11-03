const mongoose = require('mongoose');
const schema = mongoose.Schema;

const pageModel = new schema({
	name: {
		type: String,
		unique: true,
		required: true
	},
	icon: {
		type: String,
		required: false
	},
	description: {
        type: String,
        required: false
	},
	shortDescription: {
		type: String,
        required: false
	},
	isPromote: {
		type: Boolean,
		default: false
	},
	isHome: {
		type: Boolean,
		default: false
	},
	thumbnail: {
		type: String,
		required: false
	},
	parent: {
        type: String,
        required: false
	},
	link: {
		type: String
	},
	order: {
		type: Number,
        required: false
	},
	active: {
        type: Boolean,
        required: false,
		default: true
	},
	updated: { 
		type: Date,
		default: Date.now
	},
	seo: {
		title: { 
			type: String,
			required: false
		},
		description: { 
			type: String,
			required: false
		},
		openGraph: {
			site_name: { 
				type: String,
				required: false
			},
			type: { 
				type: String,
				required: false
			},
			locale: {
				type: String,
				default: 'en_US'
			},
			url: { 
				type: String,
				required: false
			},
			openGraphTitle: { 
				type: String,
				required: false
			},
			openGraphdescription: { 
				type: String,
				required: false
			},
			image: { 
				type: String,
				required: false
			},
			imageWidth: { 
				type: String,
				required: false,
				default: 1200
			},
			imageHeight: { 
				type: Number,
				required: false,
				default: 1200
			}
		}
	}
});

module.exports = mongoose.model('Page', pageModel);


// {
// 	"name": "",
// 	"description": "",
// 	"parent": "",
// 	"link": "",
// 	"order": 0,
// 	"active": true,
// 	"seo": {
// 		"title": "",
// 		"description": "",
// 		"openGraph": "Rocki 2000 ltd | ",
// 			"type": "website",
// 			"locale": "en_US",
// 			"url": "",
// 			"title": "",
// 			"description": "",
// 			"image": "",
// 			"imageWidth": 1200,
// 			"imageHeight": 1200
// 		}
// 	}
// }