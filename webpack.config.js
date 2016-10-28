const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:3000',
        'webpack/hot/only-dev-server',
        './src/index',
    ],
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loaders: [
                    'react-hot-loader/webpack',
                    'babel?presets[]=es2015,presets[]=react',
                ],
                include: path.join(__dirname, 'src'),
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        hot: true,
        contentBase: './',
    }
};
