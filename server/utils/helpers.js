const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const validators = require('./validators');

const helpers = {
	hash: str => {
		if (validators.string(str)) {
			const hash = crypto
				.createHmac('sha256', process.env.HASH_SECRET)
				.update(str)
				.digest('hex');

			return hash;
		} else {
			return false;
		}
	},
	createJwtToken: obj => {
        if (typeof(obj) === 'object') {
            const token = jwt.sign({ ...obj }, process.env.HASH_SECRET, {
                expiresIn: '24h'
            });
            
            return token;
        } else {
            return false;
        }
    },
    validateJwtToken: async (jwtToken) => {
        if (typeof(jwtToken) === 'string') {
            try {
                const decoded = await jwt.verify(jwtToken, process.env.HASH_SECRET);
                return decoded
            } catch (err) {
                return false
            }
          } else {
            return false
          }
    },
    extractJwtFromRequest: req => {
        const token = req.headers['x-access-token'] || req.headers['authorization'];
        const authorizationHeader = validators.string(token);
        if (
            authorizationHeader &&
            authorizationHeader.toLowerCase().indexOf('bearer') > -1
        ) {
            return authorizationHeader.replace(/Bearer/g, '').trim();
        } else {
            return false
        }
    }
};

module.exports = helpers;
