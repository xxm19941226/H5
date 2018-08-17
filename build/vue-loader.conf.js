var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
    loaders: utils.cssLoaders({
        // css: 'vue-style-loader!css-loader',
        // less: 'vue-style-loader!css-loader!less-loader',
        // scss: 'vue-style-loader!css-loader!sass-loader',
        sourceMap: isProduction
            ? config.build.productionSourceMap
            : config.dev.cssSourceMap,
        extract: isProduction
    }),
    postcss: [
		require('autoprefixer')({
            browsers: ['iOS >= 7', 'Android >= 4.1']
        })
	]
}
