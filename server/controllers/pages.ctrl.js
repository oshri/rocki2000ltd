const Page = require('../models/pageModel');
const PageTag = require('../models/tokenModel');

const createCtrl = (app,  pageService) => {
	const factory = {};

	/**
	 * Return the parent node and all the tree under it
	 * @param {string} parentId 
	 */

	factory.structure = async (req, res, next) => {
		try {
			const forest = await pageService.getForest();
			
			res.status(200).json(forest);
		} catch(err){
			res.status(500).json({ error: err });
		}
	};

	/**
	 * Return the parent node and all the tree under it
	 * @param {string} parentId 
	 */

	factory.pagesTree = async (req, res, next) => {
		try {
			const pages = await pageService.getAdminForest();
			
			res.status(200).json(pages);
		} catch(err){
			res.status(500).json({ error: err });
		}
	};

	/**
	 * GET Home page 
	 */

	 factory.home = async (req, res, next) => {
		 try {
			const parents = await pageService.getParents();
			const homePages = await pageService.getHomePages();
			res.status(200).json({parents, homePages});
		 } catch (err) {
			res.status(500).json({ error: err });
		 }

	 };

	/**
	 *  GET Tags
	 *  pages/:id/tags
	 */
	factory.getTags = async (req, res, next) => {
		try {
			const tags = await pageService.getTags(req.params.id);
			res.status(200).json(tags);
		  } catch (err) {
			res.status(500).json({ error: err });
		  }
	};

	/**
	 * POST
	 * pages/
	 */

	factory.createTag = async (req, res, next) => {
		try {
			const tag = await pageService.createTag({pageId: req.params.id, name: req.body.name});
			res.status(201).json(tag);
		  } catch (err) {
			res.status(500).json({ error: err });
		  }
	};
	

	/**
	 *  GET
	 *  pages/
	 */
	factory.list = async (req, res, next) => {
		try {
			const all = await pageService.getAll();
			res.status(200).json(all);
		} catch (err) {
			res.status(500).json({error: err});
		}
	};

	/**
	 *  GET
	 *  pages/:id
	 */
	factory.get = async (req, res, next) => {
		try {
			const page = await pageService.get(req.params.id);
			const children = await pageService.getChildren(page.id);
			const tags = await pageService.getTags(req.params.id);

			res.status(200).json({...page.toJSON(), tags: tags, children});
		  } catch (err) {
			res.status(500).json({ error: err });
		  }
	};

	/**
	 * POST
	 * pages/
	 */

	factory.post = async (req, res, next) => {
		try {
			const page = await pageService.createPage(req.body);
			res.status(201).json(page);
		  } catch (err) {
			res.status(500).json({ error: err });
		  }
	};

	/**
	 * PUT
	 * pages/:id
	 */
	factory.update = async (req, res, next) => {
		try {
			const update = await pageService.update(req.params.id, req.body);
			
			res.status(200).json(update);
		} catch (err) {
			res.status(500).json({error: err});
		}
	};

	/**
	 * DELETE
	 * pages/:id
	 */
	factory.delete = async (req, res, next) => {
		try {
			const deleted = await pageService.delete(req.params.id);
			res.status(200).json({deleted: 'ok'});
		} catch (err) {
			res.status(500).json({error: err});
		}
	};

	return factory;
};

module.exports = createCtrl;
