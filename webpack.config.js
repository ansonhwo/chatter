const path = require('path');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const CircularDependencyPluginConfig = new CircularDependencyPlugin({
	exclude: /a\.js|node_modules/,
	failOnError: true,
	cwd: process.cwd()
});
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: './client/index.html',
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
	mode: 'none',
	entry: './client/index.js',
	output: {
		path: path.resolve('dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' }
				]
			},
			{
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }, {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }, {
		test: /\.js$/,
		exclude: /node_modules/,
		loader: "eslint-loader",
		options: {
			failOnError: true
		}
	  }
		]
	},
	plugins: [
		HtmlWebpackPluginConfig,
		CircularDependencyPluginConfig
	]
};