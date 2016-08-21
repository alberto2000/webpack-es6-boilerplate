var path = require('path');
var DashboardPlugin = require('webpack-dashboard/plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: './src/js/index.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: './js/bundle.js'
	},
	devtool: '#eval-source-map',
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'babel',
				query: {
					presets: ['es2015']
				}
			},
			{
				test: /\.vue$/,
				loader: 'vue'
			}
		]
	},
	vue: {
		loaders: {
			scss: 'style!css?sourceMap!sass?sourceMap'
		},
		autoprefixer: {
			browsers: ['last 2 versions']
		}
	},
	plugins: [
		new DashboardPlugin(),
		new CopyWebpackPlugin([
			{from: 'src/index.html',to: './'},
			{from: 'src/404.html',to: './'},
			{from: 'src/favicon.ico',to: './'},
			{from: 'src/.gitignore',to: './'},
			{from: 'src/humans.txt',to: './'},
			{from: 'src/robots.txt',to: './'},
			{from: 'src/favicon.ico',to: './'}
		])
	]
};