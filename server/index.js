const express = require('express');
const dotenv = require('dotenv');
const winston = require('winston');
const next = require('next');
const morgan = require('morgan');
const { parse } = require('url');
const bodyParser = require('body-parser');
const Page = require('./models/pageModel');
const helmet = require('helmet');

/**
 * CONFIG
 */

const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = app.getRequestHandler();
const dbPath =
	process.env.MONGODB_URI || 'mongodb://localhost:27017/rocki2000ltd';
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
		expressApp.use(helmet());

		/**
		 * Api Routes
		 */

		const apiRoutes = require('./apiRoutes.js');
		apiRoutes(expressApp);

		/**
		 * Public Routes
		 */

		expressApp.get('/page/:link', (req, res) => {
			const queryParams = {
				link: req.params.link
			};

			Page.findOne({ link: queryParams.link })
				.exec()
				.then(page => {
					if(!page) res.redirect(301, '/');

					return app.render(req, res, '/page', { id: page.id });
				})
				.catch((err) => res.redirect(301, '/'));
		});

		expressApp.get('/page', (req, res) => {
			const queryParams = { id: req.params.id, link: req.params.link };
			if (req.params.id)
				return res.redirect(`/page/${req.params.link}`, queryParams);
			res.redirect(301, '/');
		});

		expressApp.get('/subject/:link', (req, res) => {
			const queryParams = {
				link: req.params.link
			};

			Page.findOne({ link: queryParams.link })
				.exec()
				.then(page => {
					if(!page) res.redirect(301, '/');

					return app.render(req, res, '/subject', { id: page.id });
				})
				.catch((err) => res.redirect(301, '/'));
		});

		expressApp.get('/subject', (req, res) => {
			const queryParams = { id: req.params.id, link: req.params.link };
			if (req.params.id)
				return res.redirect(`/subject/${req.params.link}`, queryParams);
			res.redirect(301, '/');
		});

		/**
		 * All Other Routes
		 */

		expressApp.get('*', (req, res) => {
			if (req.url === '/sw.js') {
				app.serveStatic(req, res, path.resolve('./static/sw.js'))
			  } else {
				return handle(req, res);
			  }
		});

		expressApp.listen(PORT, () =>
			winston.log(
				'info',
				`Rocki2000ltd listening on port ${PORT}, Env: ${
					process.env.NODE_ENV
				}`
			)
		);
	})
	.catch(ex => {
		winston.log('error', ex.stack);
		process.exit(1);
	});
