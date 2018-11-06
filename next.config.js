const webpack = require('webpack');
require('dotenv').config();
const glob = require('glob');
const path = require('path');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
// const CriticalPlugin = require('webpack-plugin-critical').CriticalPlugin;

module.exports = {
	webpack: (config, { dev }) => {
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

		const oldEntry = config.entry
    config.entry = () => oldEntry().then(entry => {
      entry['main.js'].push(path.resolve('./server/utils/offline'))
      return entry
		})
		
    if(!dev){
      config.plugins.push(new SWPrecacheWebpackPlugin({
        cacheId: 'test-lighthouse',
        filepath: path.resolve('./static/sw.js'),
        staticFileGlobs: [
          'static/**/*'
        ],
        minify: true,
        staticFileGlobsIgnorePatterns: [/\.next\//],
        runtimeCaching: [{
          handler: 'fastest',
          urlPattern: /[.](png|jpg|css)/
        },{
          handler: 'networkFirst',
          urlPattern: /^http.*/
        }]
      }))
    }

		// config.plugins.push(
		// 	new CriticalPlugin({
		// 		src: 'index.html',
		// 		inline: true,
		// 		minify: true,
		// 		dest: 'index.html'
		// 	})
		// );
		
		config.plugins.push(
      new webpack.optimize.UglifyJsPlugin()
   	);

		config.plugins.push(new webpack.EnvironmentPlugin(['API_URL']));

		return config;
	}
};

const withSass = require('@zeit/next-sass');
module.exports = withSass();
