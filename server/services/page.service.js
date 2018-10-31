const Base = require("./base");
const Page = require('../models/pageModel');
const PageTag = require('../models/pageTagModel');
const errors = require('../utils/errors');
const winston = require('winston');

class PageService extends Base {

    constructor() {
        super(Page);
    }

    async getTags(pageId) {
        const tags = await PageTag.find({pageId: pageId}, 'name');
        return tags.map(tag => tag.name);
    }

    async createTag(tag) {
        const newPageTag = new PageTag(tag);
        return await newPageTag.save();
    }

    async getTree(id) {
		const root = await this.get(id);
        if(!root) {throw new errors.NotFoundError(`Can't find Page with id '${id}' doesn't exist`);}

		const result = { 
            name: root.name,
            link: root.link,
            id: root.id
        };

        if(root.icon) {
            result.icon = root.icon;
        }

        const children = await Page.find({ parent: id });
        
        result.children = (children && children.length) ? children.map(page =>  this.getTree(page.id)) : [];
            for(let i = 0; i < result.children.length; i++){
                result.children[i] = await result.children[i];
            }
		return result;
    }
    
    
	async getForest() {
        const roots = await Page.find({ parent: null }).sort('order');
    
        const trees = roots.map(page =>  this.getTree(page.id));
        for(let i = 0; i < trees.length; i++){
            trees[i] = await trees[i];
        }
        return trees;   
    }
    
    async getChildren(parentId) {
        const pages = await Page.find({parent: parentId}).sort('order');
        return pages.map((page) => {
            return {
                name: page.name,
                description: page.description,
                link: page.link
            };
        });
    }
}

module.exports = PageService;