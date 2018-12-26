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
   * auth.requiresAdmin, 
   */
  router.route('/pages')
    .post(pagesCtrl.post)
    .get(pagesCtrl.list);

  router.route('/pages/navigation')
    .get(pagesCtrl.structure);

  router.route('/pages/all')
    .get(pagesCtrl.pagesTree);

  router.route('/pages/home')
    .get(pagesCtrl.home);

  router.route('/pages/:id')
    .get(pagesCtrl.get)
    .put(pagesCtrl.update)
    .delete(pagesCtrl.delete);

  router.route('/pages/:id/tags')
    .get(pagesCtrl.getTags)
    .post(pagesCtrl.createTag)
    .delete(pagesCtrl.deleteTag);

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
    .get(usersCtrl.list);

  router.route('/users/:id')
    .get(usersCtrl.get)
    .put(usersCtrl.update)
    .delete(usersCtrl.delete);

  router.route('/users/:id/activate')
    .put(usersCtrl.activate);


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