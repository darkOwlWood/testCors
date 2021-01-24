const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlWebpakPlugin = require('add-asset-html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname,'src','index.js'),
    output:{
        publicPath: '/',
        path: path.resolve(__dirname,'dist'),
        filename: '[fullhash]-bundle.js',
    },
    resolve: {
        extensions: ['.js','.jsx'],
    },
    module:{
        rules:[
            {
                test: /\.(jsx?)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.(s?css)$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(jpg|png|jpeg|gift)$/,
                use:[
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8000,
                            fallback: 'file-loader',
                        },
                    }
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'public','index.html'),
        }),
        new webpack.DllReferencePlugin({
            manifest: path.resolve(__dirname,'modules-manifest.json'),
        }),
        new AddAssetHtmlWebpakPlugin({
            publicPath: '/',
            filepath: path.resolve(__dirname,'dist','modules.js'),
        }),
    ]
}