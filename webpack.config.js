const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const autoprefixer = require('autoprefixer')
const express = require('express')

const CSSModuleLoader = {
    loader: 'css-loader',
    options: {
        modules: true,
        sourceMap: true,
        localIdentName: '[local]__[hash:base64:5]',
        camelCase: true
    }
}

const CSSLoader = {
    loader: 'css-loader',
    options: {
        modules: false,
        sourceMap: true,
        camelCase: true
    }
}

const PostCssLoader = {
    loader: 'postcss-loader',
    options: {
        ident: 'postcss',
        sourceMap: true,
        plugins: () => {
            autoprefixer({
                browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9'
                ]
            })
        }
    }
}

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.sass$/,
                include: [
                    path.resolve(__dirname, 'src/styles/')
                ],
                use: [
                    'style-loader',
                    CSSLoader,
                    'sass-loader'                    
                ]
            },
            {
                test: /\.sass$/,
                exclude: /src\/styles/,
                use: [
                    'style-loader',
                    CSSModuleLoader,
                    PostCssLoader,
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './tools/template/index.html'
        })
    ],
    devServer: {
        before(app) {
            app.use('./src/static', express.static('/assets/'))
        },
        contentBase: path.resolve(__dirname)
    }
}