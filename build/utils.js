var ExtractTextPlugin = require('extract-text-webpack-plugin');
var isProd = process.env.NODE_ENV === "production";

var cssLang = [{
  name: 'css',
  reg: /\.css$/,
  loader: 'css-loader'
},
{
  name: 'less',
  reg: /\.less$/,
  loader: 'less-loader'
},
];

function genLoaders(lang) {
  var loaders = ['css-loader', 'postcss-loader'];
  if (lang.name !== 'css') {
    loaders.push(lang.loader);
  }
  if (isProd) {

    loaders = ExtractTextPlugin.extract({
      use: loaders
    });
  } else {

    loaders.unshift('vue-style-loader');
  }

  return loaders.map(function (item) {
    return { loader: item, options: { sourceMap: true } };
  });
}

exports.styleLoaders = function () {
  var output = [];
  cssLang.forEach(lang => {
    output.push({
      test: lang.reg,
      use: genLoaders(lang)
    })
  });
  return output;
};
// options of vue-loader
exports.vueLoaderOptions = function () {
  var options = {
    loaders: {}
  };
  cssLang.forEach(lang => {
    options.loaders[lang.name] = genLoaders(lang);
  });
  return options;
};