const express = require('express');
const dotenv = require('dotenv');
const winston = require('winston');
const next = require('next');
const morgan = require('morgan');
const { parse } = require('url');
const bodyParser = require('body-parser');
const Page = require('./models/pageModel');
const helmet = require('helmet');
const LRUCache = require('lru-cache');

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
 * SSR Cache
 * production: 1 hour chach
 */

let cacheTime = 1000 * 60 * 60;

if (process.env.NODE_ENV !== 'production') {
	cacheTime = 100;
}

const ssrCache = new LRUCache({
	max: 100,
	maxAge: cacheTime
});

const getCacheKey = req => {
	return `${req.url}`;
};

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
		 * SSR Chach Html
		 */
		const renderAndCache = (req, res, pagePath, queryParams) => {
			const key = getCacheKey(req);

			// If we have a page in the cache, let's serve it
			if (ssrCache.has(key)) {
				winston.log('CACHE HIT', `${key}`);
				res.send(ssrCache.get(key));
				return;
			}

			// If not let's render the page into HTML
			app.renderToHTML(req, res, pagePath, queryParams)
				.then(html => {
					// Let's cache this page
					winston.log('CACHE MISS', `${key}`);
					ssrCache.set(key, html);

					res.send(html);
				})
				.catch(err => {
					app.renderError(err, req, res, pagePath, queryParams);
				});
		};

		/**
		 * Api Routes
		 */

		const apiRoutes = require('./apiRoutes.js');
		apiRoutes(expressApp);

		/**
		 * Public Routes
		 */

		expressApp.get('/', (req, res) => {
			renderAndCache(req, res, '/');
		});

		expressApp.get('/page/:link', (req, res) => {
			const queryParams = {
				link: req.params.link
			};

			Page.findOne({ link: queryParams.link })
				.exec()
				.then(page => {
					if (!page) res.redirect(301, '/');

					return renderAndCache(req, res, '/page', { id: page.id });
				})
				.catch(err => res.redirect(301, '/'));
		});

		expressApp.get('/page', (req, res) => {
			const queryParams = { id: req.params.id, link: req.params.link };
			if (req.params.id)
				return renderAndCache(`/page/${req.params.link}`, queryParams);
			res.redirect(301, '/');
		});

		expressApp.get('/subject/:link', (req, res) => {
			const queryParams = {
				link: req.params.link
			};

			Page.findOne({ link: queryParams.link })
				.exec()
				.then(page => {
					if (!page) res.redirect(301, '/');

					return renderAndCache(req, res, '/subject', { id: page.id });
				})
				.catch(err => res.redirect(301, '/'));
		});

		expressApp.get('/subject', (req, res) => {
			const queryParams = { id: req.params.id, link: req.params.link };
			if (req.params.id)
				return renderAndCache(`/subject/${req.params.link}`, queryParams);
			res.redirect(301, '/');
		});

		/**
		 * All Other Routes
		 */

		expressApp.get('*', (req, res) => {
			if (req.url === '/sw.js') {
				app.serveStatic(req, res, path.resolve('./static/sw.js'));
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
