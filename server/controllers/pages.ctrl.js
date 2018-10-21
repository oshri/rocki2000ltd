const Page = require('../models/pageModel');
const mongoose = require('mongoose');


const createCtrl = app => {
	const factory = {};

	/**
	 * Return the parent node and all the tree under it
	 * @param {string} parentId 
	 */
	async function getTree(parentId) {
		const root = Page.findById(parentId);
		if (!root) {
			throw new Error("Can't find Page with id " + parentId);
		}
		const result = { name: root.name };
		const children = await Page.find({ parent: parentId });
		returesult.children = (children && children.length) ? children.map(x => getTree(x.id)) : [];
		return result;
	}

	async function getForest() {
		const roots = await Page.find({ parent: null });
		return roots.map(x => getTree(x.id));
	}

	factory.forest = async (req, res, next) => {
		try {
			const forest = getForest();
			res.status(200).json(forest);
		} catch(error){
			res.status(500).json({error});
		}
	};
	

	/**
	 *  GET
	 *  pages/
	 */
	factory.list = (req, res, next) => {
		Page.find({}, (err, pages) => {
			if (err) res.send(500);
			res.status(200).json(pages);
		});
	};

	/**
	 *  GET
	 *  pages/:id
	 */
	factory.get = (req, res, next) => {
		const id = req.params.id;

		Page.findById(id)
			.exec()
			.then(doc => {
				if (!doc) {
					return res.status(404).json({
						error: `Page id:${id} doesn't exist`
					});
				}

				res.status(200).json(doc);
			})
			.catch(err => res.status(500).json({ error: err }));
	};

	/**
	 * POST
	 * pages/
	 */

	factory.post = (req, res, next) => {
		const body = req.body;

		const page = new Page({
			_id: mongoose.Types.ObjectId(),
			name: body.name,
			description: body.description,
			parent: body.parent
		});

		page.save()
			.then(response => {
				res.status(201).json(response);
			})
			.catch(err => {

				if(err.code === 11000) {
					res.status(500).json({ error: 'Duplicate page with the same name' });
				}
				
				res.status(500).json({ error: err });
			});
	};

	/**
	 * PUT
	 * pages/:id
	 */
	factory.update = (req, res, next) => {
		const id = req.params.id;
		const updatePage = req.body;
		Page.updateOne({ _id: id }, { $set: updatePage })
			.exec()
			.then(page => {
                if (!page) {
                    return res.status(404).json({ 
                        error: `Page id:${id} doesn't exist`
                    });
                }

                res.status(200).json(page);
            })
			.catch(err => res.status(500).json({error: err}));
	};

	/**
	 * DELETE
	 * pages/:id
	 */
	factory.delete = (req, res, next) => {
        const id = req.params.id;
        
		Page.remove({ _id: id })
			.exec()
			.then(page => {
				res.status(200).json(page);
			})
			.catch(err => res.status(500).json({ error: err }));
	};

	return factory;
};

module.exports = createCtrl;
