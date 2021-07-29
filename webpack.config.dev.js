const path = require('path')
const nodeExternals = require('webpack-node-externals')
const { merge } = require('webpack-merge')
const config = require('./webpack.base')
const devServerConfig = {
  target: 'node',
  entry: './src/server/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  externals: [nodeExternals()],
}
module.exports = merge(config, devServerConfig)