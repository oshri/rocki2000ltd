const User = require('../models/userModel');
const Token = require('../models/tokenModel');
const mongoose = require('mongoose');
const logErrorAndNext = require('../utils/logger');
const validators = require('../utils/validators');
const helpers = require('../utils/helpers');
const errors = require('../utils/errors');
// const cookieSession = require('../../shared/cookieSession');

const createCtrl = (app, moduleService) => {
	const tokenCtrl = require('./tokens.ctrl')(app);
	const factory = {};

	function hidrateUser(userResponse) {
		return {
			firstName: userResponse.firstName,
			lastName: userResponse.lastName
		};
	}

	/**
	 *  GET
	 *  Users/
	 */
	factory.list = (req, res, next) => {
		User.find({}, (err, Users) => {
			if (err) res.send(500);
			const _users = Users.map((user) => hidrateUser(user));
			res.status(200).json(_users);
		});
	};

	/**
	 *  GET
	 *  Users/:id
	 */
	factory.get = (req, res, next) => {
		const id = validators.string(req.params.id);

		if (id) {
			User.findById(id)
				.exec()
				.then((doc) => {
					if (!doc) {
						return res.status(404).json({
							error: `User id:${id} doesn't exist`
						});
					}

					res.status(200).json(doc);
				})
				.catch((err) =>
					logErrorAndNext(
						`Get User by id went wrong`,
						{},
						req.body,
						next,
						res,
						500
					)
				);
		} else {
			return logErrorAndNext(
				`Missing required fields`,
				{},
				req.body,
				next,
				res,
				400
			);
		}
	};

	/**
	 * POST
	 * Users/
	 */

	factory.post = (req, res, next) => {
		const body = req.body;

		const firstName = validators.string(req.body.firstName);
		const lastName = validators.string(req.body.lastName);
		const email = validators.string(req.body.email);
		const password = validators.string(req.body.password);

		if (firstName && lastName && email && password) {
			const user = new User({
				_id: mongoose.Types.ObjectId(),
				firstName: body.firstName,
				lastName: body.lastName,
				email: body.email,
				password: helpers.hash(body.password),
				active: true
			});

			user
				.save()
				.then((response) => {
					const _user = hidrateUser(response);

					res.status(201).json(_user);
				})
				.catch((err) => {
					if (err.code === 11000) {
						res.status(500).json({
							error: 'Duplicate User with the same name'
						});
					}

					res.status(500).json({ error: err });
				});
		} else {
			return logErrorAndNext(
				`Missing required fields`,
				{},
				req.body,
				next,
				res,
				400
			);
		}
	};

	/**
	 * PUT
	 * Users/:id
	 */
	factory.update = (req, res, next) => {
		const id = validators.string(req.params.id);
		const firstName = validators.string(req.body.firstName);
		const lastName = validators.string(req.body.lastName);

		if ((id && firstName) || lastName) {
			const updateUser = {
				firstName,
				lastName
			};

			User.updateOne({ _id: id }, { $set: updateUser })
				.exec()
				.then((User) => {
					if (!User) {
						return res.status(404).json({
							error: `User id:${id} doesn't exist`
						});
					}

					res.status(200).json(User);
				})
				.catch((err) => res.status(500).json({ error: err }));
		} else {
			return logErrorAndNext(
				`Missing required data`,
				{},
				req.body,
				next,
				res,
				400
			);
		}
	};

	/**
	 * PUT
	 * Users/:id/activate
	 */
	factory.activate = (req, res, next) => {
		const id = validators.string(req.params.id);

		if (id) {
			User.updateOne({ _id: id }, { $set: { active: true } })
				.exec()
				.then((User) => {
					if (!User) {
						return res.status(404).json({
							error: `User id:${id} doesn't exist`
						});
					}

					res.status(200).json(User);
				})
				.catch((err) => res.status(500).json({ error: err }));
		} else {
			return logErrorAndNext(
				`Missing required data`,
				{},
				req.body,
				next,
				res,
				400
			);
		}
	};

	/**
	 * DELETE
	 * Users/:id
	 */
	factory.delete = (req, res, next) => {
		const id = validators.string(req.params.id);

		if (id) {
			User.updateOne({ _id: id }, { $set: { active: false } })
				.exec()
				.then((User) => {
					if (!User) {
						return res.status(404).json({
							error: `User id:${id} doesn't exist`
						});
					}

					res.status(200).json(User);
				})
				.catch((err) => res.status(500).json({ error: err }));
		} else {
			return logErrorAndNext(
				`Missing required data`,
				{},
				req.body,
				next,
				res,
				400
			);
		}
	};

	/**
	 * POST
	 * auth/
	 */
	factory.createToken = async (req, res, user) => {
		const expires = Date.now() + 1000 * 60 * 60;
		const jwtToken = helpers.createJwtToken({ user });

		const token = new Token({
			_id: mongoose.Types.ObjectId(),
			token: jwtToken,
			expires: expires
		});

		try {
			const _token = await token.save();
			if (!_token) {
				return res.status(404).json({
					error: `Fail to create new Token!`
				});
			}

			return jwtToken;
		} catch (err) {
			return logErrorAndNext(
				`Faild in token creation data`,
				{},
				req.body,
				next,
				res,
				400
			);
		}
	};

	factory.auth = async (req, res, next) => {
		const email = validators.string(req.body.email);
		const password = validators.string(req.body.password);

		const hashPassword = helpers.hash(password);

		try {
			const user = await User.findOne({ email });
			if (!user) {
				return res.status(404).json({
					error: `Authorization Required!`
				});
			}

			if (user.password === hashPassword) {
				// TODO: need to check if user have a token and if he expires!!!!!!

				const token = await factory.createToken(req, res, {
					email: user.email,
					id: user.id,
					firstName: user.firstName,
					lastName: user.lastName
				});

				res.header('Authorization', `Bearer ${token}`);
				res.status(200).json({
					auth: 'success',
					user: hidrateUser(user),
					token: `Bearer ${token}`
				});
			} else {
				return res.status(404).json({
					error: `Authorization Required!`
				});
			}
		} catch (error) {
			return logErrorAndNext(
				`Missing required data`,
				{},
				req.body,
				next,
				res,
				400
			);
		}
	};

	factory.logout = async (req, res, next) => {
		const jwt = helpers.extractJwtFromRequest(req);

		try {
			const token = await Token.deleteOne({ token: jwt });
			res.status(200).json({ logout: 'success' });
		} catch (err) {
			return logErrorAndNext(
				`Missing required data`,
				{},
				req.body,
				next,
				res,
				400
			);
		}
	};

	factory.getCurrentUser = async (req, res, next) => {
		const jwt = helpers.extractJwtFromRequest(req);
		const decodedToken = await helpers.validateJwtToken(jwt);

		if (!decodedToken) {
			return logErrorAndNext(
				`Authorization Required!`,
				{},
				req.body,
				next,
				res,
				401
			);
		}

		try {
			const token = await Token.findOne({ token: jwt });

			if (token.expires > Date.now()) {
				const user = await User.findById(decodedToken.id);

				if (!user) {
					return logErrorAndNext(
						`Authorization Required!`,
						{},
						req.body,
						next,
						res,
						401
					);
				}

				res
					.status(200)
					.json({ auth: 'success', user: hidrateUser(user) });
			} else {
				return logErrorAndNext(
					`Authorization expires!`,
					{},
					req.body,
					next,
					res,
					401
				);
			}
		} catch (err) {
			return logErrorAndNext(
				`Authorization Required!`,
				{},
				req.body,
				next,
				res,
				401
			);
		}
	};

	return factory;
};

module.exports = createCtrl;
