'use strict';

var path = require('path');

module.exports = {
	entry: path.join(__dirname, '/src/entry.js'),
	output: {
		path: path.join(__dirname, '/__build__'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: '6to5-loader?optional=selfContained'
		}]
	}
};
