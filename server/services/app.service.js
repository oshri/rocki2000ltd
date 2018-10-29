const Base = require("./base");
const App = require('../models/appModel');

class AppService extends Base {

    constructor() {
        super(App);
    }

}

module.exports = AppService;