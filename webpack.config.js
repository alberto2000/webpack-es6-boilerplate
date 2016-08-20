var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: './src/js/index.js',
	output: {
		path: __dirname,
		filename: './dist/js/bundle.js'
	},
	devtool: 'source-map',
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
				loaders: ['style', 'css?sourceMap']
			},
			{
				test: /\.scss$/,
				loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
			}
		]
	},
	plugins: [
		new CopyWebpackPlugin([
			{from: 'src/index-dev.html',to: 'dist/index.html'},
			{from: 'src/404.html',to: 'dist'},
			{from: 'src/favicon.ico',to: 'dist'},
			{from: 'src/.gitignore',to: 'dist'},
			{from: 'src/humans.txt',to: 'dist'},
			{from: 'src/robots.txt',to: 'dist'},
			{from: 'src/favicon.ico',to: 'dist'}
		])
	]
};