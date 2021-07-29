const path = require('path')
const { merge } = require('webpack-merge')

const config = require('./webpack.base')
const clientConfig = {
  entry: './src/client/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'index.js'
  },
}
module.exports = merge(config, clientConfig)