const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const  ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');


let config = {
    entry: './src/app.js',
    output: {
        // path: path.resolve(__dirname, 'dist'),
        path: path.join(__dirname, '__build__'),
        // filename: 'bundle.js',
        filename: '[name].js',
        // publicPath: '/__build__/'
    },
    devtool: 'source-map',
    devServer: {
        inline: true,
        hot: true,
        host: '0.0.0.0',
        port: 9000,
        contentBase: path.resolve(__dirname, '__build__'),
        compress: true
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
                // use: ExtractTextPlugin.extract({
                //     fallback: 'style-loader',
                //     use: 'css-loader'
                // })
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        outputPath: './images/',
                        limit: 500,
                        publicPath: '../images'
                    }
                }]
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html'
        }),
        // new ExtractTextPlugin('css/[name].[hash:8].css'),
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin()
    ],
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    }
};

module.exports = config;