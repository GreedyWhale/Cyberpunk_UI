const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { join } = require('path')
const base = require('./base')

module.exports = merge(base, {
  mode: 'development',
  entry: {
    index: join(__dirname, '../src/example.tsx')
  },
  output: {
    filename: '[name]_[contenthash].js'
  },
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    compress: true,
    contentBase: join(__dirname, '../dist'),
    open: true,
    hot: true,
    host: '0.0.0.0',
    useLocalIp: true,
    progress: true,
    port: 9000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: join(__dirname, '../src/template/index.html')
    })
  ]
})
