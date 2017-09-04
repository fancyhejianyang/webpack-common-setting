const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    entry:{
        app:'./es6/main.js'
    },
    // resolve:{
    //     alias:{
    //         jquery:"jquery/dist/jquery.min.js"
    //     }
    // },
    devtool:'inline-source-map',
    devServer:{
        contentBase:__dirname,//设置服务根目录
        hot:true,
        inline:true
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),//build 时清空相应缓存文件夹
        new HtmlWebpackPlugin({
            template:__dirname+"/index.html"
        }),
        // new webpack.ProvidePlugin({
        //     $:'jquery',
        //     Jquery:'jquery'
        // }),
        new webpack.HotModuleReplacementPlugin(),//热替换
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath:"/"
    },
    module:{
        loaders:[
            {   
                test: /\.js$/,
                exclude: /node_modules/, 
                loader: 'babel-loader',
                query:{
                    presets:['es2015']
                }
            },
            {
                test:/\.css$/,
                loader:'style-loader!css-loader'
            },
            {
                test:/\.(png|svg|jpg|gif)$/,
                loader:'file-loader'
            }
        ]
    }
}