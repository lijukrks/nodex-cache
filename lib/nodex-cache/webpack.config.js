const webpack = require('webpack');
const path = require('path');
module.exports = {
    entry: path.resolve(__dirname + '/src/index.js'),
    output: {
        path: path.resolve(__dirname + '/dist/'),
        filename: 'nodex-cache.min.js',
        libraryTarget: 'umd',
        library: 'nodex-cache',
        umdNamedDefine: true
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                include: __dirname,
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            sourceMap: false,
            mangle: true,
            compress: {
                warnings: false
            }
        })
    ]
};

