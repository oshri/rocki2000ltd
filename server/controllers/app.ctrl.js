const App = require('../models/appModel');

const createCtrl = (app,  appService) => {
	const factory = {};	

	/**
	 *  GET App
	 *  app/:id
	 */
	factory.getApp = async (req, res, next) => {
		try {
			const app = await appService.get(req.params.id);
			res.status(200).json(app);
		  } catch (err) {
			res.status(500).json({ error: err });
		  }
	};


	/**
	 * POST
	 * app/
	 */

	factory.post = async (req, res, next) => {
		try {
			const app = await appService.create(req.body);
			res.status(201).json(app);
		  } catch (err) {
			res.status(500).json({ error: err });
		  }
	};

	/**
	 * PUT
	 * app/:id
	 */
	factory.updateApp = async (req, res, next) => {
		try {
			const update = await appService.update(req.params.id, req.body);
			res.status(200).json(update);
		} catch (err) {
			res.status(500).json({error: err});
		}
	};

	return factory;
};

module.exports = createCtrl;
