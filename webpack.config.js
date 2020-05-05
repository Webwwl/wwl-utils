const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

function resolve (p) {
  return path.resolve(__dirname, p)
}
const baseConfig = {
  output: {
    path: resolve('dist'),
    filename: 'boundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: resolve('node_modules'),
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
  ]
}

const devConfig = merge(baseConfig, {
  devtool: 'source-map',
  mode: 'development',
  devServer: {
    port: 9999,
    host: 'localhost',
    contentBase: resolve('dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('index.html'),
      filename: 'web/index.html'
    })
  ]
})

const buildConfig = merge(baseConfig, {
  entry: './src/index.js',
  mode: 'none',
  target: 'web',
  output: {
    filename: 'wwl-utils.umd.js',
    libraryTarget: 'umd',
    library: 'wwlUtils',
    globalObject: 'this'
  }
})

module.exports = process.env.NODE_ENV === 'development' ? devConfig : buildConfig
