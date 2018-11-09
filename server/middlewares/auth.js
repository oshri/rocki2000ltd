const logErrorAndNext = require('../utils/logger');
const User = require('../models/userModel');
const Token = require('../models/tokenModel');
const helpers = require("../utils/helpers");


/**
 * Admin login routing middleware
 */

exports.requiresAdmin = async (req, res, next) => {
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

			if (
				user.email === decodedToken.email &&
				user.role === 'admin'
			) {
				/**
				 * You are Admin :)
				 */
				next();
			}
			
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
