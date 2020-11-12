const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const base = require('./base')
const { join } = require('path')

module.exports = merge(base, {
  mode: 'production',
  devtool: false,
  entry: {
    index: join(__dirname, '../src/lib/index.tsx')
  },
  output: {
    filename: '[name].js'
  },
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
    new CleanWebpackPlugin()
  ]
})
