const Base = require("./base");
const Page = require('../models/pageModel');
const errors = require('../utils/errors');
const winston = require('winston');

class PageService extends Base {

    constructor() {
        super();
        this.model = Page;
    }

    async getTree(id) {
		const root = await this.get(id);
        if(!root) {throw new errors.NotFoundError(`Can't find Page with id '${id}' doesn't exist`);}

		const result = { name: root.name };
        const children = await Page.find({ parent: id });
        
        result.children = (children && children.length) ? children.map(page =>  this.getTree(page.id)) : [];
        
		return result;
    }
    
    
	async getForest() {
        const roots = await Page.find({ parent: null });
    
        return roots.map(page =>  this.getTree(page.id));

	}
}

module.exports = PageService;