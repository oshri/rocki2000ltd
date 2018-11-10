const express = require("express");
const auth = require('./middlewares/auth');
const PageService = require('./services/page.service');
const AppService = require('./services/app.service');
const InstagramService = require('./services/instagram.service');

const apiRoutes = (app) => {
  const router = express.Router();

  /**
   * Services
   */

  const pageService = new PageService();
  const appService = new AppService();
  const instagramService = new InstagramService();

  /**
   * Routes Controllers
   */
  
  const instagramCtrl = require("./controllers/instagram.ctrl")(app, instagramService);
  const pagesCtrl = require("./controllers/pages.ctrl")(app, pageService);
  const appCtrl = require("./controllers/app.ctrl")(app, appService);
  const usersCtrl = require("./controllers/users.ctrl")(app);
  const tokensCtrl = require("./controllers/tokens.ctrl")(app);

  
  /**
   * App
   */
  router.route('/app')
    .post(auth.requiresAdmin, appCtrl.post)
    .put(auth.requiresAdmin, appCtrl.updateApp);

  /**
   * Instagram
   */
  router.route('/instagram/access-token')
    .get(auth.requiresAdmin, instagramCtrl.getAccessToken);

  router.route('/instagram/tag/:name')
    .get(instagramCtrl.getTagByName);

  router.route('/instagram/tags')
    .post(instagramCtrl.getTagsByList);

    
  /**
   * Pages
   */
  router.route('/pages')
    .post(auth.requiresAdmin, pagesCtrl.post)
    .get(pagesCtrl.list);

  router.route('/pages/navigation')
    .get(pagesCtrl.structure);

  router.route('/pages/all')
    .get(auth.requiresAdmin, pagesCtrl.structure);

  router.route('/pages/home')
    .get(pagesCtrl.home);

  router.route('/pages/:id')
    .get(pagesCtrl.get)
    .put(auth.requiresAdmin, pagesCtrl.update)
    .delete(auth.requiresAdmin, pagesCtrl.delete);

  router.route('/pages/:id/tags')
    .get(pagesCtrl.getTags)
    .post(auth.requiresAdmin, pagesCtrl.createTag);

  router.route('/pages/tags')
    .get(pagesCtrl.get);


  /** 
   * Auth / Login
   */
  router.route('/auth')
    .post(usersCtrl.auth)
    .get(usersCtrl.getCurrentUser);

  router.route('/auth/logout')
    .post(usersCtrl.logout);

  /**
   * Users
   */
  router.route('/users')
    .post(usersCtrl.post)
    .get(auth.requiresAdmin, usersCtrl.list);

  router.route('/users/:id')
    .get(auth.requiresAdmin, usersCtrl.get)
    .put(auth.requiresAdmin, usersCtrl.update)
    .delete(auth.requiresAdmin, usersCtrl.delete);

  router.route('/users/:id/activate')
    .put(auth.requiresAdmin, usersCtrl.activate);


  /**
   * Tokens
   */
  router.route('/tokens')
    .post(tokensCtrl.post);

  router.route('/tokens/:id')
    .get(tokensCtrl.get)
    .put(tokensCtrl.update)
    .delete(tokensCtrl.delete);


  
  app.use('/api', router);
};

module.exports = apiRoutes;