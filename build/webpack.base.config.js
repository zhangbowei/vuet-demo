var webpack = require('webpack');
var path = require('path');
var utils = require('./utils');

function resolve(relPath) {
  return path.resolve(__dirname, relPath);
}

module.exports = {
  entry: { app: resolve('../src/main.js') },
  output: {
    filename: 'js/[name].js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      _: "lodash"
    })
  ],
  resolve: {
    // require时省略的扩展名，如：require('module') 不需要module.js
    extensions: ['.js', '.vue'],
    // 别名
    alias: {
      'vue': 'vue/dist/vue.js',
      components: resolve('../src/components'),
      modules: resolve('../node_modules'),
      routes: resolve('../src/routes'),
      pages: resolve('../src/pages'),
      images: resolve('../src/images'),
      utils: resolve('../src/utils')
    }
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: "babel-loader",
      include: [resolve('../src')]
    },
    {
      test: /\.vue$/,
      use: {
        loader: "vue-loader",
        options: utils.vueLoaderOptions()
      }
    },
    {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 10000,
          name: 'images/[name].[hash:7].[ext]'
        }
      }
    },
    {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      use: [{
        loader: "url-loader",
        options: {
          limit: 10000,
          name: 'fonts/[name].[hash:7].[ext]'
        }
      }]
    }
    ]
  }
}