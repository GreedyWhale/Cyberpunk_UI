const { join } = require('path')

module.exports = {
  entry: {
    index: join(__dirname, '../src/lib/index.tsx')
  },
  output: {
    filename: '[name]_[contenthash].js',
    path: join(__dirname, '../dist'),
    library: "cyberpunk_ui",
    libraryTarget: "umd",
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  module: {
    rules: [
      { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ }
    ]
  }
}