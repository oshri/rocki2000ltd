const Base = require("./base");
const User = require('../models/userModel');
const errors = require('../utils/errors');
const winston = require('winston');

class UserService extends Base {

    constructor() {
        super();
        this.model = User;
    }
    
    hidrateUser(userResponse) {
		return {
			firstName: userResponse.firstName,
			lastName: userResponse.lastName
		};
	}

    auth(data) {

    }

    
}

module.exports = UserService;