const crypto = require('crypto');
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
	}
};

module.exports = helpers;
