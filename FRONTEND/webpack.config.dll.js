const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        modules: ['react','react-dom'],
    },
    output:{
        library: '[name]',
        publicPath: '/',
        path: path.resolve(__dirname,'dist'),
        filename: '[name].js',
    },
    plugins:[
        new webpack.DllPlugin({
            name: '[name]',
            path: path.resolve(__dirname,'[name]-manifest.json'),
        }),
    ]
};