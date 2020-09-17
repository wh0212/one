const webpack = require('webpack');
const path = require('path');

module.exports = {
	devServer: {
		proxy: {
			'/api': {
			  target: 'http://localhost:8080',
				pathRewrite: {
					'^/api': '/moke'
				}
			}
		}
	},
	chainWebpack: (config) => {
		config.resolve.alias
			.set('styles', path.join(__dirname, './src/assets/styles'))
			.set('@', path.join(__dirname, './src/'))
	},
	configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
          jQuery: 'jquery',
          $: 'jquery',
          "libraryName": "mint-ui",
          "style": true
        })
      ]
    }
	}