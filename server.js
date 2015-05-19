'use strict';

// Used to configure and enable react hot loader.

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var config = require('./webpack.config');

var webpackDevServer = new WebpackDevServer(webpack(config), {
	hot: true,
	publicPath: config.output.publicPath
});

webpackDevServer.listen(3000, 'localhost', function (err) {
	if (err) {
		throw err;
	}
});
