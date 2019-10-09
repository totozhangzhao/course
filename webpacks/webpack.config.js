module.exports = {
	entry: './src/split-a.js',
	output: {
		filename: 'split-a.js',
		publicPath: '/dist/'
	},
	// optimization: {
	// 	splitChunks: {
	// 		chunks: 'all'
	// 	}
	// },
	// module: {
	// 	rules: [
	// 		{
	// 			test: /\.css$/,
	// 			use: [
	// 				'style-loader',
	// 				'css-loader',
	// 				'postcss-loader'
	// 			]
	// 		}
	// 		// {
	// 		// 	test: /\.scss$/,
	// 		// 	use: [
	// 		// 		'style-loader',
	// 		// 		{
	// 		// 			loader: 'css-loader',
	// 		// 			options: {
	// 		// 				sourceMap: true
	// 		// 			}
	// 		// 		}, {
	// 		// 			loader: 'sass-loader',
	// 		// 			options: {
	// 		// 				sourceMap: true
	// 		// 			}
	// 		// 		}
	// 		// 	]
	// 		// }
	// 		// {
	// 		// 	test: /\.less$/,
	// 		// 	use: [
	// 		// 		'style-loader',
	// 		// 		{
	// 		// 			loader: 'css-loader',
	// 		// 			options: {
	// 		// 				sourceMap: true
	// 		// 			}
	// 		// 		}, {
	// 		// 			loader: 'less-loader',
	// 		// 			options: {
	// 		// 				sourceMap: true
	// 		// 			}
	// 		// 		}
	// 		// 	]
	// 		// }
	// 	]
	// },
	mode: 'development'
};