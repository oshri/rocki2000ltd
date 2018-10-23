const Base = require("./base");
const Page = require('../models/pageModel');
const errors = require('../utils/errors');
const winston = require('winston');

class UserService extends Base {

    constructor() {
        super();
        this.model = Page;
    }

    
}

module.exports = UserService;