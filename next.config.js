const webpack = require('webpack');
require('dotenv').config();
const glob = require('glob');
const path = require('path');

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

		config.plugins.push(new webpack.EnvironmentPlugin(['API_URL']));

		return config;
	}
};

const withSass = require('@zeit/next-sass');
module.exports = withSass();
