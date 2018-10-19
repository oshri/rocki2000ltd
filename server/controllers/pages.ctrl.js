const Page = require('../models/pageModel');
const mongoose = require('mongoose');


const createCtrl = app => {
	const factory = {};

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
			description: body.description
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
