const Token = require('../models/tokenModel');
const User = require('../models/userModel');
const mongoose = require('mongoose');
const logErrorAndNext = require('../utils/logger');
const validators = require('../utils/validators');
const helpers = require('../utils/helpers');

const createCtrl = app => {
	const factory = {};

	/**
	 *  GET
	 *  Tokens/:id
	 */
	factory.get = (req, res, next) => {
		const id = validators.string(req.params.id);

		if (id) {
			Token.findById(id)
				.exec()
				.then(doc => {
					if (!doc) {
						return res.status(404).json({
							error: `Token id:${id} doesn't exist`
						});
					}

					res.status(200).json(doc);
				})
				.catch(err =>
					logErrorAndNext(
						`Get Token by id went wrong`,
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
	 * Tokens/
	 */

	factory.post = (req, res, next) => {
		const email = validators.string(req.body.email);
		const password = validators.string(req.body.password);

		if (email && password) {
			User.find({ email })
				.exec()
				.then(doc => {
					if (!doc) {
						return res.status(404).json({
							error: `User email:${email} doesn't exist`
						});
					}

					// We have the user & we chack his hashPassword
					const hashPassword = helpers.hash(password);

					if (hashPassword === doc[0].password) {
						// Create new token for that user
						const expires = Date.now() + 1000 * 60 * 60;

						const token = new Token({
							_id: mongoose.Types.ObjectId(),
							email: email,
							expires: expires
						});

						token.save()
							.then(response => {
								// TODO: modify the response with nice message!!

								res.status(201).json(response);
							})
							.catch(err => {
								if (err.code === 11000) {
									res.status(500).json({
										error: 'Duplicate Token'
									});
								}

								res.status(500).json({ error: err });
							});
					} else {
						return logErrorAndNext(
							`No Token`,
							{},
							req.body,
							next,
							res,
							400
						);
					}
				})
				.catch(err =>
					logErrorAndNext(
						`Get User by email went wrong`,
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
	 * PUT
	 * Tokens/:id
     * body: extends
	 */
	factory.update = (req, res, next) => {
		const id = validators.string(req.params.id);
		const _extends = typeof(req.body.extends) == 'boolean'  && req.body.extends == true ? true : false;

		if (id && _extends) {
            
            Token.findById(id)
				.exec()
				.then(doc => {
					if (!doc) {
						return res.status(404).json({
							error: `Token id:${id} doesn't exist`
						});
					}

					if (doc.expires > Date.now()) {
                        // Extend the token with one more hour
                        const expires = Date.now() + 1000 * 60 * 60;

                        Token.updateOne({ _id: id }, { $set: { expires: expires } })
                            .exec()
                            .then(Token => {
                                if (!Token) {
                                    return res.status(404).json({
                                        error: `Token id:${id} doesn't exist`
                                    });
                                }


                                res.status(200).json({message: "The Token extend to one more hour"});
                            })
                            .catch(err => res.status(500).json({ error: err }));

                    } else {
                        logErrorAndNext(
                            `The token has already expired, and cannot be extended`,
                            {},
                            req.body,
                            next,
                            res,
                            400
                        )
                    }
				})
				.catch(err =>
					logErrorAndNext(
						`Get Token by id went wrong`,
						{},
						req.body,
						next,
						res,
						500
					)
				);
            

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
	 * Tokens/:id
	 */
	factory.delete = (req, res, next) => {
		const id = validators.string(req.params.id);

		if (id) {
			Token.deleteOne({_id: id})
				.exec()
				.then(Token => {
					if (!Token) {
						return res.status(404).json({
							error: `Token id:${id} doesn't exist`
						});
					}

					res.status(200).json({message: "The token deleted"});
				})
				.catch(err => res.status(500).json({ error: err }));
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
    
    

	return factory;
};

module.exports = createCtrl;
