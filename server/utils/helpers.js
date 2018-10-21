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
    validateJwtToken: jwtToken => {
        if (typeof(jwtToken) === 'string') {
            jwt.verify(jwtToken, process.env.HASH_SECRET, (err, decoded) => {
              if (err) {
                return false;
              } else {

                return decoded;
              }
            });
          } else {
            return false
          }
    }
};

module.exports = helpers;
