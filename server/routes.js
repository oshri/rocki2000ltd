const express = require("express");

const apiRoutes = (app) => {
  const router = express.Router();
  
  const instagramCtrl = require("./controllers/instagramAccessToken.ctrl")(app);
  const navigationCtrl = require("./controllers/navigation.ctrl")(app);
  const pagesCtrl = require("./controllers/pages.ctrl")(app);


  // Instagram Access Token 
  router.route('/instagram-access-token').get(instagramCtrl.get);

  // Instagram Access Token 
  router.route('/navigation').get(navigationCtrl.get);

  // Pages
  router.route('/pages')
    .post(pagesCtrl.post)
    .get(pagesCtrl.list);

  router.route('/pages/:id')
    .get(pagesCtrl.get)
    .put(pagesCtrl.update)
    .delete(pagesCtrl.delete);
  
  app.use('/api', router);
};

module.exports = apiRoutes;