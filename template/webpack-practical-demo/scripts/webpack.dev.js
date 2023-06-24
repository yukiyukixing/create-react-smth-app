const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

// const proxyAddress = ['/api', '/api2']
// const targetAddress = {
//   // 开发环境
//   dev: 'http://api-dev.baidu.com',
//   // 测试环境
//   test: 'http://api-test.baidu.com',
//   // 预发环境
//   pre: 'http://api-pre.baidu.com',
// }

// const env = process.env.NODE_ENV || 'dev'

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public'),
    },
    hot: true,
    // proxy: [
    //   {
    //     context: proxyAddress,
    //     target: targetAddress[env],
    //     changeOrigin: true,
    //   },
    // ],
  },
})
