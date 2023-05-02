const path = require ("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode:"development",
    entry:"./src/index.js",
    output: {
        filename:"build/[name].js",
        path:path.resolve(__dirname, "dist"),
        clean: true,
        publicPath: '/',
    },

    optimization: {
        runtimeChunk: 'single',
      },

    devtool: 'inline-source-map',
    devServer: {
    static: './dist',
             },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html',
    })],
    module: {
        rules:[
            {
                test:/\.css$/,
                use: ["style-loader","css-loader"],
            }
        ]
    }
};