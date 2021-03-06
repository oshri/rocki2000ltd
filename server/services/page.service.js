const Base = require("./base");
const App  = require('../models/appModel');
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
        const tags = await this.findExistingTag(tag);
        
        if (tags.length === 0) {
            const newPageTag = new PageTag(tag);
            return await newPageTag.save();
        }
        
        if (tags[0].name !== tag.name) {
            const newPageTag = new PageTag(tag);
            return await newPageTag.save();
        }

        return Promise.reject(`Tag with name: ${tag.name}, all ready exist in that page`);
    }

    async findExistingTag(tag) {
        const tags = await PageTag.find({pageId: tag.pageId});
        const t = tags.filter((t) => t.pageId === tag.pageId && t.name === tag.name);
        return t;
    }


    async deleteTag(tag) {
        const tags = await this.findExistingTag(tag);
        return await PageTag.deleteOne({_id: tags[0]._id}).exec();
    }

    async getTree(id) {
		const root = await this.get(id);
        if(!root) {throw new errors.NotFoundError(`Can't find Page with id '${id}' doesn't exist`);}

		const result = { 
            name: root.name,
            link: root.link,
            id: root.id,
            template: root.template
        };

        if(root.icon) {
            result.icon = root.icon;
        }

        const children = await Page.find({ parent: id, active:true }).sort('order');
        
        result.children = (children && children.length) ? children.map(page =>  this.getTree(page.id)) : [];
            for(let i = 0; i < result.children.length; i++){
                result.children[i] = await result.children[i];
            }
		return result;
    }
    
    
	async getForest() {
        const roots = await Page.find({ parent: null, active: true }).sort('order');
    
        const trees = roots.map(page =>  this.getTree(page.id));
        for(let i = 0; i < trees.length; i++){
            trees[i] = await trees[i];
        }
        return trees;   
    }

    async getFullTree(id) {
		const root = await this.get(id);
        if(!root) {throw new errors.NotFoundError(`Can't find Page with id '${id}' doesn't exist`);}

		const result = root.toJSON();

        if(root.icon) {
            result.icon = root.icon;
        }

        const children = await Page.find({ parent: id, active:true }).sort('order');
        
        result.children = (children && children.length) ? children.map(page =>  this.getFullTree(page.id)) : [];
            for(let i = 0; i < result.children.length; i++){
                result.children[i] = await result.children[i];
            }
		return result;
    }

    async getAllTree(id) {
		const root = await this.get(id);
        if(!root) {throw new errors.NotFoundError(`Can't find Page with id '${id}' doesn't exist`);}

		const result = root.toJSON();

        if(root.icon) {
            result.icon = root.icon;
        }

        const children = await Page.find({ parent: id }).sort('order');
        
        result.children = (children && children.length) ? children.map(page =>  this.getFullTree(page.id)) : [];
            for(let i = 0; i < result.children.length; i++){
                result.children[i] = await result.children[i];
            }
		return result;
    }

    async getAdminForest() {
        const roots = await Page.find({ parent: null }).sort('order');
    
        const trees = roots.map(page =>  this.getAllTree(page.id));
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
                link: page.link,
                _id: page._id
            };
        });
    }

    async getParents() {
        const parents = await Page.find({ parent: null }).sort('order');
        return parents.map((page) => {
            return {
                name: page.name,
                description: page.description,
                link: page.link,
                icon: page.icon,
                template: page.template,
                id: page._id
            };
        });
    }

    async getHomePages() {
        return await Page.find({isHome: true});
    }

    async getParentLink(parentId) {
        const parent = await Page.findById(parentId);
        return parent.link;
    }

    async generateSeoFromPage(data) {
        const app = await App.findOne({}).exec();

        return {
            title: data.name ? `${app.name} | ${data.name}` : app.name,
            description: data.description ? app.description : app.description,
            openGraph: {
                site_name: data.name ? `${app.name} | ${data.name}` : app.name,
                type: 'website',
                url: `${app.url}/page/${data.link}`,
                openGraphTitle: data.name,
                openGraphdescription: data.name || '',
                image: data.thumbnail || 'https://instagram.fsdv2-1.fna.fbcdn.net/vp/6d29880925aa6c8ae96a015ee6060158/5C7CBF35/t51.2885-19/s150x150/42667215_2249355515346719_2545214181003493376_n.jpg',
            }
        };
    }

    async createPage(data) {
        const exists = await Page.findById(data.id).exec();

		if (exists) {
			throw new errors.ConflictError(`page '${data.id}' already exists`);
		}

        winston.log('info', `creating new page ${JSON.stringify(data)}`);
        
        if(data.parent) {
            const parentLink = await this.getParentLink(data.parent);
            data.link = `${parentLink}/${data.link ? data.link : data.name}`;
        } else {
            data.link = `${data.link ? data.link : data.name}`;
        }

        const pageSeo = await this.generateSeoFromPage(data);
        
        data.seo = pageSeo;

        data.thumbnail = data.thumbnail ? data.thumbnail : 'https://instagram.fsdv2-1.fna.fbcdn.net/vp/6d29880925aa6c8ae96a015ee6060158/5C7CBF35/t51.2885-19/s150x150/42667215_2249355515346719_2545214181003493376_n.jpg';

		const entity = new this.model(data);
		return entity.save().then(_entity => _entity);
    }

}

module.exports = PageService;