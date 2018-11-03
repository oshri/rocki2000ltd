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
        const newPageTag = new PageTag(tag);
        return await newPageTag.save();
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

    async getParents() {
        const parents = await Page.find({ parent: null }).sort('order');
        return parents.map((page) => {
            return {
                name: page.name,
                description: page.description,
                link: page.link,
                icon: page.icon
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
            data.link = `${parentLink}/${data.link}`;
        }

        const pageSeo = await this.generateSeoFromPage(data);
        data.seo = pageSeo;

        data.thumbnail = data.thumbnail ? data.thumbnail : 'https://instagram.fsdv2-1.fna.fbcdn.net/vp/6d29880925aa6c8ae96a015ee6060158/5C7CBF35/t51.2885-19/s150x150/42667215_2249355515346719_2545214181003493376_n.jpg';

		const entity = new this.model(data);
		return entity.save().then(_entity => _entity);
    }

}

module.exports = PageService;