const express = require("express");
const auth = require('./middlewares/auth');

const apiRoutes = (app) => {
  const router = express.Router();
  
  const instagramCtrl = require("./controllers/instagramAccessToken.ctrl")(app);
  const navigationCtrl = require("./controllers/navigation.ctrl")(app);
  const pagesCtrl = require("./controllers/pages.ctrl")(app);
  const usersCtrl = require("./controllers/users.ctrl")(app);


  // Instagram Access Token 
  router.route('/instagram-access-token').get(instagramCtrl.get);

  // Instagram Access Token 
  router.route('/navigation').get(navigationCtrl.get);

  // Pages
  router.route('/pages')
    .post(auth.requiresAdmin, pagesCtrl.post)
    .get(pagesCtrl.list);

  router.route('/pages/:id')
    .get(pagesCtrl.get)
    .put(auth.requiresAdmin, pagesCtrl.update)
    .delete(auth.requiresAdmin, pagesCtrl.delete);

  // Users
  router.route('/users')
    .post(auth.requiresAdmin, usersCtrl.post)
    .get(auth.requiresAdmin, usersCtrl.list);

  router.route('/users/:id')
    .get(auth.requiresAdmin, usersCtrl.get)
    .put(auth.requiresAdmin, usersCtrl.update)
    .delete(auth.requiresAdmin, usersCtrl.delete);

    router.route('/users/:id/activate')
      .put(auth.requiresAdmin, usersCtrl.activate);
      

  
  app.use('/api', router);
};

module.exports = apiRoutes;