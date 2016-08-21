var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: './src/js/index.js',
	output: {
		path: __dirname,
		filename: './dist/js/bundle.min.js'
	},
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
			scss: ExtractTextPlugin.extract('css!sass')
		},
		autoprefixer: {
			browsers: ['last 2 versions']
		}
	},
	plugins: [
		new ExtractTextPlugin('./dist/css/styles.css'),
		new webpack.optimize.DedupePlugin(),
		new CopyWebpackPlugin([
			{from: 'src/index-prod.html',to: 'dist/index.html'},
			{from: 'src/404.html',to: 'dist'},
			{from: 'src/favicon.ico',to: 'dist'},
			{from: 'src/.gitignore',to: 'dist'},
			{from: 'src/humans.txt',to: 'dist'},
			{from: 'src/robots.txt',to: 'dist'},
			{from: 'src/favicon.ico',to: 'dist'}
		]),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				screw_ie8: true,
				warnings: false
			},
			comments: false
		})
	]
};