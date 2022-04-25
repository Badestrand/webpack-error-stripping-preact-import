const path = require('path')

module.exports = {
	mode: "development",
	output: {
		path: path.resolve(__dirname, 'src')
	},
	entry: "./src/app.jsx",
	module: {
		rules: [{
			test: /\.(ts|js)x?$/i,
			exclude: /node_modules/,
			use: {
				loader: "babel-loader",
				options: {
					presets: [
						"@babel/preset-env",
						"@babel/preset-react",
						"@babel/preset-typescript",
					],
				},
			},
		}],
	},
	resolve: {
		extensions: [".tsx", ".jsx", ".js"],
	},
	devtool: "inline-source-map",
}
