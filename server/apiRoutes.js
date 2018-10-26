const express = require("express");
const auth = require('./middlewares/auth');
const PageService = require('./services/page.service');


const apiRoutes = (app) => {
  const router = express.Router();

  /**
   * Services
   */

  const pageService = new PageService();



  /**
   * Routes Controllers
   */
  
  const instagramCtrl = require("./controllers/instagramAccessToken.ctrl")(app);
  const pagesCtrl = require("./controllers/pages.ctrl")(app, pageService);
  const usersCtrl = require("./controllers/users.ctrl")(app);
  const tokensCtrl = require("./controllers/tokens.ctrl")(app);

  

  // Instagram Access Token 
  router.route('/instagram-access-token').get(instagramCtrl.get);

  // Pages
  router.route('/pages')
    .post(auth.requiresAdmin, pagesCtrl.post)
    .get(pagesCtrl.list);

  router.route('/pages/navigation')
    .get(pagesCtrl.structure);

  router.route('/pages/:id')
    .get(pagesCtrl.get)
    .put(auth.requiresAdmin, pagesCtrl.update)
    .delete(auth.requiresAdmin, pagesCtrl.delete);

  router.route('/pages/:id/tags')
    .get(pagesCtrl.getTags)
    .post(auth.requiresAdmin, pagesCtrl.createTag);

  router.route('/pages/tags')
    .get(pagesCtrl.get);


  // Users
  router.route('/users')
    .post(usersCtrl.post)
    .get(auth.requiresAdmin, usersCtrl.list);

  router.route('/users/:id')
    .get(auth.requiresAdmin, usersCtrl.get)
    .put(auth.requiresAdmin, usersCtrl.update)
    .delete(auth.requiresAdmin, usersCtrl.delete);

  router.route('/users/:id/activate')
    .put(auth.requiresAdmin, usersCtrl.activate);

  // Tokens
  router.route('/tokens')
    .post(tokensCtrl.post);

  router.route('/tokens/:id')
    .get(tokensCtrl.get)
    .put(tokensCtrl.update)
    .delete(tokensCtrl.delete);


  
  app.use('/api', router);
};

module.exports = apiRoutes;