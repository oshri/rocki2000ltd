import * as express from 'express';

import SubjectCtrl from '../controllers/subject.ctrl';
import Subject from '../models/subject';


export default function setRoutes(app) {

  const router = express.Router();

  const subjectCtrl = new SubjectCtrl();
  

  // Subject
  router.route('/subjects').get(subjectCtrl.getAll);
  router.route('/subjects/:id').get(subjectCtrl.get);


  app.use('/api', router);
}
