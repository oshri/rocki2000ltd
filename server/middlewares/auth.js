const logErrorAndNext = require('../utils/logger');
const User = require('../models/userModel');
const Token = require('../models/tokenModel');
const validators = require('../utils/validators');
const jwt = require('jsonwebtoken');

/**
 * Admin login routing middleware
 */

exports.requiresAdmin = function(req, res, next) {
	const authorizationHeader = validators.string(req.headers.authorization);

	if (
		authorizationHeader &&
		authorizationHeader.toLowerCase().indexOf('bearer') > -1
	) {
		const jwtToken = authorizationHeader.replace(/Bearer/g, '').trim();

		jwt.verify(jwtToken, process.env.HASH_SECRET, (err, decoded) => {
			if (err) {
				return logErrorAndNext(
					`Authorization Required!`,
					{},
					req.body,
					next,
					res,
					401
				);
			} else {
                
                /**
                 * Token Object
				 * email: userEmail
				 * id: userId
				 */
				const decodedToken = decoded;

				Token.find({ token: jwtToken })
					.exec()
					.then(doc => {
						if (!doc[0]) {
							return logErrorAndNext(
								`Authorization Required!`,
								{},
								req.body,
								next,
								res,
								404
							);
						}

						if (doc[0].expires > Date.now()) {

							User.findById(decodedToken.id)
								.exec()
								.then(doc => {
									if (!doc) {
										return res.status(404).json({
											error: `Authorization Required!`
										});
									}

									if (
										doc.email === decodedToken.email &&
										doc.role === 'admin'
									) {
                                        /**
                                         * You are Admin :)
                                         */
										next();
									} else {
										return logErrorAndNext(
											`Authorization Required!`,
											{},
											req.body,
											next,
											res,
											401
										);
									}
								})
								.catch(err => {
									return logErrorAndNext(
										`Auth iisues!`,
										{},
										req.body,
										next,
										res,
										401
									);
								});
						} else {
							logErrorAndNext(
								`Authorization Required!`,
								{},
								req.body,
								next,
								res,
								400
							);
						}
					})
					.catch(err => {
						return logErrorAndNext(
							`Authorization Required!`,
							{},
							req.body,
							next,
							res,
							500
						);
					});
			}
		});
	} else {
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
