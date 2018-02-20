const webpack = require('webpack');
const path = require('path');
const DashboardPlugin = require("webpack-dashboard/plugin");

const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssets = require("optimize-css-assets-webpack-plugin");

const config = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "./public"),
		filename: "./bundle.js"
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: "babel-loader"
		}, {
			test: /\.scss$/,
			use: ExtractTextWebpackPlugin.extract({
				fallback: 'style-loader',
				use: ['css-loader', 'sass-loader', 'postcss-loader'],
			})
		}]
	},
	plugins: [
		new ExtractTextWebpackPlugin("styles.css"),
		new DashboardPlugin()
	],
	devServer: {
		contentBase: path.resolve(__dirname, "./public"),
		historyApiFallback: true,
		inline: true,
		open: true,
		hot: true
	},
	devtool: "eval-source-map"
}

module.exports = config;

if (process.env.NODE_ENV === 'production') {
	module.exports.plugins.push(
		new webpack.optimize.UglifyJsPlugin(),
		new OptimizeCSSAssets()
	);
}
