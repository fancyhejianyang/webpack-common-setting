
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);
//express 使用 webpack-dev-middleware 和 配置文件webpack.config.js
app.use(webpackDevMiddleware(compiler,{
    publicPath:config.output.publicPath
}));
//设置服务端口 3333
app.listen(3333,function(){
    console.log("Server is lisitening on  port 3333:\n");
})
// test

