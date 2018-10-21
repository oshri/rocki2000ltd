const express = require('express');
const dotenv = require('dotenv');
const config = require('./config');
const winston = require('winston');
const next = require('next');
const morgan = require('morgan');
const bodyParser = require('body-parser');


/**
 * CONFIG
 */

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
dotenv.load({ path: '.env' });


/**
 * APPLICATION LOGGING
 */
winston.configure({
	transports: [
	  new winston.transports.Console({
		timestamp: true,
		label: config.get('app.name'),
		level: config.get('logLevel')
	  })
	]
  });
  
/**
 * MONGODB CONNECTION
 */
require('./db')(config.get('mongodb.url'), config.get('mongodb.username'), config.get('mongodb.password'));



/**
 * Next & Express
 */
app.prepare()
	.then(() => {
		const expressApp = express();
		expressApp.use(morgan('dev'));
		expressApp.use(bodyParser.json());
		expressApp.use(bodyParser.urlencoded({ extended: true }));

		/**
		 * Routes
		 */
		const apiRoutes = require('./routes.js');
		apiRoutes(expressApp);

		expressApp.get('*', (req, res) => {
			return handle(req, res);
		});

		expressApp.listen(config.get('port'), () =>
			winston.log("info", `Rocki2000ltd listening on port ${config.get('port')}, Env: ${config.get('env')}`)
		);

	})
	.catch(ex => {
		winston.log("error", ex.stack);
		process.exit(1);
	});
