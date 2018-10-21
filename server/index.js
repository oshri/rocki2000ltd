const express = require('express');
const dotenv = require('dotenv');
const https = require('https');
const next = require('next');
const fs = require('fs');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

/**
 * CONFIG
 */
const PORT = process.env.PORT || 4200;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
dotenv.load({ path: '.env' });

console.log("NODE_ENV:", process.env.NODE_ENV);

const db = mongoose.connect(
	process.env.NODE_ENV !== 'development'
		? process.env.MONGODB_URI
		: process.env.MONGODB_URI_DEVELOP,
	{ useNewUrlParser: true },
	err => {
		if (err) {
			console.log('Errr: could not connect to mongodb', err);
		} else {
			console.log('Success: Connected to mogodb', err);
		}
	}
);

/**
 * SSL CERT
 */

const sslOptions = {
	key: fs.readFileSync(path.join(__dirname, '/../.https/key.pem')),
	cert: fs.readFileSync(path.join(__dirname, '/../.https/cert.pem'))
};

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
		 * Handle www & http://
		 */
		// expressApp.all(/.*/, (req, res, next) => {
		//   const host = req.header('host');

		//   if (host.match(/^www\..*/i)) {
		//       if (req.protocol === 'http') {
		//           res.redirect(301, 'http://' + host + req.url);
		//       }
		//       next();
		//   } else {
		//       res.redirect(301, 'http://www.' + host + req.url);
		//   }
		// });

		/**
		 * Routes
		 */
		const apiRoutes = require('./routes.js');
		apiRoutes(expressApp);

		expressApp.get('*', (req, res) => {
			return handle(req, res);
		});

		expressApp.listen(PORT, () =>
			console.log(`Rocki2000ltd listening on port ${PORT}`)
		);

		/**
		 * HTTPS SERVER
		 */
		// const httpsServer = https.createServer(sslOptions, expressApp);

		// httpsServer.listen(PORT,(err) =>{
		//   if (err) throw err;
		//     console.log(`> Express server Ready on ${PORT}`);
		// });
	})
	.catch(ex => {
		console.error(ex.stack);
		process.exit(1);
	});
