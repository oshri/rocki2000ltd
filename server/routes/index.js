const express = require("express");
// const instagramCtrl = require("../controllers/instagramAccessToken.ctrl");
// const navigationCtrl = require("../controllers/navigation.ctrl");

const apiRoutes = (app) => {
  const router = express.Router();
  
  const instagramCtrl = require("../controllers/instagramAccessToken.ctrl")(app);
  const navigationCtrl = require("../controllers/navigation.ctrl")(app);


  // Instagram Access Token 
  router.route('/instagram-access-token').get(instagramCtrl.get);

  // Instagram Access Token 
  router.route('/navigation').get(navigationCtrl.get);
  
  app.use('/api', router);
};

module.exports = apiRoutes;