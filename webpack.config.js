const webpack = require('webpack');
const path = require('path');
const DashboardPlugin = require("webpack-dashboard/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");

const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssets = require("optimize-css-assets-webpack-plugin");

const config = {
	context: path.join(__dirname, "app"),
	entry: "./app.module.js",
	output: {
		path: path.join(__dirname, "dist"),
		filename: "./bundle.js"
	},
	module: {
		rules: [{
				test: /\.(html)$/,
				loader: 'html-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.js$/,
				loader: "babel-loader",
				exclude: /node_modules/
			},
			{
				test: /\.scss$/,
				use: ExtractTextWebpackPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader', 'postcss-loader'],
				})
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './app.template.html'
		}),
		//new ExtractTextWebpackPlugin("styles.css"),
	],
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		historyApiFallback: true,
		inline: false,
		open: true,
		hot: true
	},
	devtool: "eval-source-map"
}

switch (process.env.NODE_ENV) {

case 'production':
	{
		config.plugins.push(
			new webpack.optimize.UglifyJsPlugin(),
			new OptimizeCSSAssets()
		);
		break;
	}
}

module.exports = config;
