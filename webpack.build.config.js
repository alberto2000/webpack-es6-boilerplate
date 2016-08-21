var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: './src/js/index.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: './js/bundle.js'
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
				test: /\.css$/,
				loader: ExtractTextPlugin.extract(['css', 'postcss'])
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract(['css', 'postcss', 'sass'])
			}
		]
	},
	postcss: function() {
		return [autoprefixer];
	},
	plugins: [
		new ExtractTextPlugin('./css/styles.css'),
		new webpack.optimize.DedupePlugin(),
		new CopyWebpackPlugin([
			{from: 'src/index-prod.html',to: './index.html'},
			{from: 'src/404.html',to: './'},
			{from: 'src/favicon.ico',to: './'},
			{from: 'src/.gitignore',to: './'},
			{from: 'src/humans.txt',to: './'},
			{from: 'src/robots.txt',to: './'},
			{from: 'src/favicon.ico',to: './'}
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