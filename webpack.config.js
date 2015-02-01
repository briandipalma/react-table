'use strict';

module.exports = {
	entry: './src/entry.js',
	output: {
		path: '__build__',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{test: /\.js$/, exclude: /node_modules/, loader: '6to5-loader'}
		]
	}
};
