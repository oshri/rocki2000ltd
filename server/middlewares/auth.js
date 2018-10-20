const logErrorAndNext = require('../utils/logger');
const User = require('../models/userModel');
const Token = require('../models/tokenModel');
const validators = require('../utils/validators');

/**
 * Admin login routing middleware
 */

exports.requiresAdmin = function(req, res, next) {
	// TODO: Change to incapsulate the id & email inside JWT
	const id = validators.string(req.headers.token);
	const email = validators.string(req.headers.email);

	if (id && email) {
		Token.findById(id)
			.exec()
			.then(doc => {
				if (!doc) {
					return res.status(404).json({
						error: `Token id:${id} doesn't exist`
					});
				}

				// Validate the expires time
				if (doc.email === email && doc.expires > Date.now()) {
					// Fetch the user by email & compere
					User.find({ email })
						.exec()
						.then(doc => {
                            if(!doc) {
                                return res.status(404).json({
                                    error: `No User`
                                });
                            }

                            if(doc[0].email === email && doc[0].role === 'admin') {

                                next();
                            } else {
                                return logErrorAndNext(
                                    `No credentials sent!`,
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
		return logErrorAndNext(
			`No credentials sent!`,
			{},
			req.body,
			next,
			res,
			401
		);
	}
};
