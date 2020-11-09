const { join, resolve } = require('path')

const isDevelopment = () => process.env.NODE_ENV === 'development'

module.exports = {
  entry: {
    index: join(__dirname, '../src/lib/index.tsx')
  },
  output: {
    filename: '[name]_[contenthash].js',
    path: join(__dirname, '../dist'),
    library: 'cyberpunk_ui',
    libraryTarget: 'umd'
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    },
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: {
                auto: true,
                localIdentName: isDevelopment() ? 'cp_ui_[local]_[hash:base64:5]' : 'cp_ui_[hash:base64]'
              }
            }
          },
          {
            loader: 'sass-loader',
            options: { implementation: require('sass') }
          }
        ]
      }
    ]
  }
}
