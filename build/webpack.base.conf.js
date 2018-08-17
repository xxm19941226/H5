var path = require('path')
var utils = require('./utils')
var config = require('../config')
var webpack = require('webpack')
var vueLoaderConfig = require('./vue-loader.conf')

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

const webpackConfig = {
    entry: {
        app: './src/main.js'
    },
    output: {
        path: config.build.assetsRoot,
        filename: '[name].js',
        publicPath: config.dev.assetsPublicPath
    },
    resolve: {
        extensions: [
            '.js', '.vue', '.json'
        ],
        modules: [
            resolve('src'), resolve('node_modules')
        ],
        alias: {
            'vue$': 'vue/dist/vue.common.js',
            'src': resolve('src'),
            'assets': resolve('src/assets'),
            'components': resolve('src/components'),
            'vux-components': 'vux/src/components/'
        }
    },
    module: {
        rules: [
            // {
            //     test: /\.(js|vue)$/,
            //     loader: 'eslint-loader',
            //     enforce: "pre",
            //     include: [resolve('src'), resolve('test')],
            //     options: {
            //         formatter: require('eslint-friendly-formatter')
            //     }
            // },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoaderConfig
            }, {
                test: /iview.src.*?js$/,
                loader: 'babel?cacheDirectory'
            }, {
                test: /\.js$/,
                loader: 'babel-loader?cacheDirectory',
                include: [resolve('src'), resolve('test')]
            }, {
            //     test: /\.css$/,
            //     use: ['style-loader', 'css-loader']
            // }, {
            //     test: /\.scss$/,
            //     use: ['style-loader', 'css-loader', 'sass-loader?sourceMap']
            // }, {
            //     test: /\.less$/,
			// 	use: ['style-loader', 'css-loader', 'less-loader']
            // }, {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            }, {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    },
	// 添加DllReferencePlugin插件
    // plugins: [
    //     new webpack.DllReferencePlugin({
    //         context: path.join(__dirname, '../static/js'),  // 同那个dll配置的路径保持一致
    //         manifest: require('./vendor-manifest.json')// manifest的缓存信息
    //     })
    // ]
}

const vuxLoader = require('vux-loader')
module.exports = vuxLoader.merge(webpackConfig, {
    options: {},
    plugins: [
        {
            name: 'vux-ui'
        },
        {
            name: 'duplicate-style'
        },
        {
            name: 'inline-manifest'
        }
    ]
})
