import * as express from 'express';
import * as next from 'next';
import * as bodyParser from 'body-parser';
import * as morgan from 'morgan';
import * as mongoose from 'mongoose';
import * as path from 'path';
import * as dotenv from 'dotenv';
import setRoutes from './routes';

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const db = mongoose.connection;
(<any>mongoose).Promise = global.Promise;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');

  app
  .prepare()
  .then(() => {
    const server = express();

    // Api routes
    setRoutes(server);
    
    dotenv.load({ path: '.env' });
    server.use(bodyParser.json({limit: '300mb'}));
    server.use(bodyParser.urlencoded({limit: '300mb', extended: false }));
    server.use(morgan('dev'));

    mongoose.connect(process.env.MONGODB_URI, { useMongoClient : true });


    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(PORT, err => {
      if (err) throw err;
      console.log(`> Ready on ${PORT}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });

});