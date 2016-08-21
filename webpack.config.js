var path = require('path');
var autoprefixer = require('autoprefixer');
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
				test: /\.css$/,
				loaders: ['style', 'css?sourceMap', 'postcss?sourceMap']
			},
			{
				test: /\.scss$/,
				loaders: ['style', 'css?sourceMap', 'postcss?sourceMap', 'sass?sourceMap']
			}
		]
	},
	postcss: function() {
		return [autoprefixer];
	},
	plugins: [
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