/*
 * @Author: MADAO
 * @Date: 2020-06-16 14:36:54
 * @LastEditors: MADAO
 * @LastEditTime: 2020-06-24 15:13:33
 * @Description: webpack 生产环境配置
 */
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = merge(baseConfig, {
  mode: "production",
  devtool: "none",
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React'
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: 'ReactDom'
    }
  },
  plugins: [
    new CleanWebpackPlugin ()
  ]
})