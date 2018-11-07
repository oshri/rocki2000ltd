const webpack = require('webpack');
require('dotenv').config();
const glob = require('glob');
const path = require('path');
const withCSS = require('@zeit/next-css');
const NextWorkboxPlugin = require('next-workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = withCSS({
	webpack: (config, { isServer, buildId, dev }) => {
		config.node = {
			fs: 'empty'
		};

		const baseApiUrl =
			process.env.NODE_ENV !== 'production'
				? process.env.NODE_ENV.API_URL_DEVELOPMENT
				: process.env.NODE_ENV.API_URL_PRODUCTION;

		if (!isServer) {
			config.module.rules
				.find(({ test }) => test.test('style.css'))
				.use.push({
					loader: 'css-purify-webpack-loader',
					options: {
						includes: ['./pages/*.js', './src/components/*.js']
					}
				});
		}

		config.module.rules.push(
			{
				test: /\.(css|scss)/,
				loader: 'emit-file-loader',
				options: {
					name: 'dist/[path][name].[ext]'
				}
			},
			{
				test: /\.css$/,
				use: ['babel-loader', 'raw-loader', 'postcss-loader']
			},
			{
				test: /\.s(a|c)ss$/,
				use: [
					'babel-loader',
					'raw-loader',
					'postcss-loader',
					{
						loader: 'sass-loader',
						options: {
							includePaths: ['scss', 'node_modules']
								.map(d => path.join(__dirname, d))
								.map(g => glob.sync(g))
								.reduce((a, c) => a.concat(c), [])
						}
					}
				]
			}
		);

		const workboxOptions = {
			clientsClaim: true,
			skipWaiting: true,
			globPatterns: ['.next/static/*', '.next/static/commons/*'],
			modifyUrlPrefix: {
				'.next': '/_next'
			},
			runtimeCaching: [
				{
					urlPattern: '/',
					handler: 'networkFirst',
					options: {
						cacheName: 'html-cache'
					}
				},
				// {
				//   urlPattern: /[^3]\/movie\//,
				//   handler: 'networkFirst',
				//   options: {
				//     cacheName: 'html-cache',
				//   },
				// },
				{
					urlPattern: new RegExp(`^${baseApiUrl}/api`),
					handler: 'staleWhileRevalidate',
					options: {
						cacheName: 'api-cache',
						cacheableResponse: {
							statuses: [200]
						}
					}
				},
				{
					urlPattern: /.*\.(?:png|jpg|jpeg|svg|gif)/,
					handler: 'cacheFirst',
					options: {
						cacheName: 'image-cache',
						cacheableResponse: {
							statuses: [0, 200]
						}
					}
				}
			]
		};

		if (!isServer && !dev) {
			config.plugins.push(
				new NextWorkboxPlugin({
					buildId,
					...workboxOptions
				}),
				new WebpackPwaManifest({
					filename: 'static/manifest.json',
					name: 'Rocki 2000 ltd',
					short_name: 'Rocki',
					description: 'Rocki 2000 ltd',
					background_color: '#ffffff',
					theme_color: '#5755d9',
					display: 'standalone',
					orientation: 'portrait',
					fingerprints: false,
					inject: false,
					start_url: '/',
					ios: {
						'apple-mobile-web-app-title': 'Rocki 2000 ltd',
						'apple-mobile-web-app-status-bar-style': '#5755d9'
					},
					icons: [
						{
							src: path.resolve('static/favicon.ico'),
							sizes: [96],
							destination: '/static'
						},
						{
							src: 'static/img/apple-touch-icon-120x120.png',
							sizes: '120x120',
							type: 'image/png'
						},
						{
							src: 'static/img/apple-touch-icon-152x152.png',
							sizes: '152x152',
							type: 'image/png'
						},
						{
							src: 'static/img/android-chrome-144x144.png',
							sizes: '144x144',
							type: 'image/png'
						},
						{
							src: 'static/img/android-chrome-192x192.png',
							sizes: '192x192',
							type: 'image/png'
						},
						{
							src: 'static/img/splashscreen-icon-384x384.png',
							sizes: '384x384',
							type: 'image/png'
						}
					],
					includeDirectory: true,
					publicPath: '..'
				})
			);
		}

		config.plugins.push(new webpack.optimize.UglifyJsPlugin());

		config.plugins.push(new webpack.EnvironmentPlugin(['API_URL']));

		return config;
	}
});

const withSass = require('@zeit/next-sass');
module.exports = withSass();
