'use strict';

module.exports = {
	entry: __dirname + '/src/entry.js',
	output: {
		path: __dirname + '/__build__',
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
