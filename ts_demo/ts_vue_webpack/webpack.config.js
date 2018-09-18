var path = require('path');
var webpack = require('webpack');
module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        use: {
          loader:'babel-loader',
          
        },
        exclude: /node_modules/
      },
      {
        test:/\.vue$/,
        use:{
          loader:'vue-loader'
      }
      }
    ]
  },
  resolve: {  //导入的时候不用写拓展名
    extensions: [' ', '.js', '.json', '.vue', '.scss', '.css'],
    alias: {
      'vue$': 'vue/dist/vue.js'
    }
  },
  devServer:{
    noInfo: true,
    historyApiFallback: true,
    inline: true, //实时刷新
  },
  // watchOptions: {
  //   ignored: /node_modules/,
  //   aggregateTimeout: 300,//防止重复保存频繁重新编译,300ms内重复保存不打包
  //   poll: 1000  //每秒询问的文件变更的次数
  // },
  devtool: '#eval-source-map'
}
if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   sourceMap: true,
    //   compress: {
    //     warnings: false
    //   }
    // }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
