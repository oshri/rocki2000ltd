const express = require('express');
const dotenv = require('dotenv');
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
const dbPath = process.env.MONGODB_URI || 'mongodb://localhost:27017/rocki2000ltd';
const PORT = process.env.PORT || 3000;
dotenv.load({ path: '.env' });


/**
 * APPLICATION LOGGING
 */
winston.configure({
	transports: [
	  new winston.transports.Console({
		timestamp: true,
		label: 'Rocki2000ltd',
		level: 'info'
	  })
	]
  });
  
/**
 * MONGODB CONNECTION
 */
require('./db')(dbPath);



/**
 * Next & Express
 */
app.prepare()
	.then(() => {
		const expressApp = express();
		expressApp.disable('x-powered-by');
		
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

		expressApp.listen(PORT, () =>
			winston.log("info", `Rocki2000ltd listening on port ${PORT}, Env: ${process.env.NODE_ENV}`)
		);

	})
	.catch(ex => {
		winston.log("error", ex.stack);
		process.exit(1);
	});
