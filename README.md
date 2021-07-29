##为了让服务端能够识别 react代码 webpack需要配置如下
(```)
const path = require('path')
const nodeExternals = require('webpack-node-externals')
module.exports = {
  target: 'node',
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  externals: [nodeExternals()],
  module: {
    rules: [{
      test: /\.js?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      options: {
        presets: ['react', 'stage-0', 'es2015', 'env']
      }
    }]
  }
}
(```)


#打包及运行
需全局安装webpack和nodemon