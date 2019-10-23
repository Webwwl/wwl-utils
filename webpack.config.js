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
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: resolve('node_modules'),
        use: ['babel-loader']
      }
    ]
  },
  devServer: {
    port: 9999,
    host: 'localhost',
    contentBase: resolve('dist')
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}

const browerConfig = merge(baseConfig, {
  entry: './src/index.js',
  target: 'web',
  output: {
    filename: 'web/utils.web.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('index.html'),
      filename: 'web/index.html'
    })
  ]
})

const nodeConfig = merge(baseConfig, {
  entry: './src/lib/index.js',
  target: 'node',
  output: {
    filename: 'node/utils.node.js'
  }
})

module.exports = process.env.target === 'node' ? nodeConfig : browerConfig
