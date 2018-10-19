const User = require('../models/userModel');
const mongoose = require('mongoose');
const logErrorAndNext = require('../utils/logger');


const createCtrl = app => {
	const factory = {};

	/**
	 *  GET
	 *  Users/
	 */
	factory.list = (req, res, next) => {
		User.find({}, (err, Users) => {
			if (err) res.send(500);
			res.status(200).json(Users);
		});
	};

	/**
	 *  GET
	 *  Users/:id
	 */
	factory.get = (req, res, next) => {
		const id = req.params.id;

		User.findById(id)
			.exec()
			.then(doc => {
				if (!doc) {
					return res.status(404).json({
						error: `User id:${id} doesn't exist`
					});
				}

				res.status(200).json(doc);
			})
			.catch(err => logErrorAndNext(`Get User by id went wrong`, {}, req.body, next, res, 500));
	};

	/**
	 * POST
	 * Users/
	 */

	factory.post = (req, res, next) => {
        const body = req.body;
        
        if (!body.firstName) {
            return logErrorAndNext(`Create User didn't get FirstName in the body`, {}, req.body, next, res, 400);
        }

		const User = new User({
			_id: mongoose.Types.ObjectId(),
			firstName: body.firstName,
            lastName: body.lastName,
            role: body.role,
            email: body.email,
            password: body.password,
        });
        

		User.save()
			.then(response => {
				res.status(201).json(response);
			})
			.catch(err => {

				if(err.code === 11000) {
					res.status(500).json({ error: 'Duplicate User with the same name' });
				}
				
				res.status(500).json({ error: err });
			});
	};

	/**
	 * PUT
	 * Users/:id
	 */
	factory.update = (req, res, next) => {
		const id = req.params.id;
		const updateUser = req.body;
		User.updateOne({ _id: id }, { $set: updateUser })
			.exec()
			.then(User => {
                if (!User) {
                    return res.status(404).json({ 
                        error: `User id:${id} doesn't exist`
                    });
                }

                res.status(200).json(User);
            })
			.catch(err => res.status(500).json({error: err}));
	};

	/**
	 * DELETE
	 * Users/:id
	 */
	factory.delete = (req, res, next) => {
        const id = req.params.id;
        
		User.remove({ _id: id })
			.exec()
			.then(User => {
				res.status(200).json(User);
			})
			.catch(err => res.status(500).json({ error: err }));
	};

	return factory;
};

module.exports = createCtrl;
