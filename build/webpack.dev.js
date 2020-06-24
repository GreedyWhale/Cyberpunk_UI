/*
 * @Author: MADAO
 * @Date: 2020-06-16 14:36:43
 * @LastEditors: MADAO
 * @LastEditTime: 2020-06-24 15:50:32
 * @Description: webpack 开发环境配置
 */

const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(baseConfig, {
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  devServer: {
    compress: true,
    contentBase: resolve('dist'),
    open: true,
    hot: true,
    host: "0.0.0.0",
    useLocalIp: true,
    progress: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('src/template/index.html')
    })
  ]
})
