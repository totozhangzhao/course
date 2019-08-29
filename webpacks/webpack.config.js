const path = require('path');

module.exports = {
	context: path.join(__dirname, './src'),
	entry: {
		'index': './index.js',
		'lib': './lib.js'
	},
	output: {
		filename: '[name].js'
	},
	mode: 'development',
	devServer: {
		publicPath: '/dist'
	}
};