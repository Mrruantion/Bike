var webpack = require('webpack');

// var entry_json={};
// entry_json["/app/main.js"]=__dirname + "/app/main.js";
// entry_json['/common.js']=['react','react-dom','antd'];
// console.log(entry_json);

module.exports = {
  entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件
  output: {
    path: __dirname + "/public",//打包后的文件存放的地方
    filename: "bundle.js"//打包后输出文件的文件名
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',//在webpack的module部分的loaders里进行配置即可
      },
      {
        test: /\.json$/,
        loader: "json"
      },
      {
        test: /\.css$/,
        loader: 'style!css'//添加对样式表的处理
      },
      { test: /\.less$/, loader: "style!css!less" }
    ]
  },
  // plugins: [
  //     new webpack.optimize.CommonsChunkPlugin('common.js'),//智能提取公共模块插件
  // ],
  devServer: {
    contentBase: "./public",//本地服务器所加载的页面所在的目录
    port:'3000',
    colors: true,//终端中输出结果为彩色
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
  } 
}