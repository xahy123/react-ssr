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
需全局安装webpack(否则需要改打包webpack命令 ./node_modules/.bin/webpack --config webpack.config.dev.js --watch)
nodemon && npm-run-all 开发环境安装即可


##客户端渲染
###React代码在浏览器执行 消耗的是用户浏览器的性能

##服务端渲染
###React代码在服务器执行 增加了对服务器性能的消耗