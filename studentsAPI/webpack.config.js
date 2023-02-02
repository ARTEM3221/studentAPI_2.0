const path = require('path');
const webpack = require('webpack');


module.exports = {

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
    ]
  },


 resolve: {
   alias: {
     vue: 'vue/dist/vue.esm-bundler'
    }
   },

 devServer: {
   static: path.join(__dirname, 'src'),
   compress: true,
   port: 8080
 },

 plugins: [
   new webpack.DefinePlugin({
     __VUE_OPTIONS_API__: true,
     __VUE_PROD_DEVTOOLS__: false
   })
 ]

};
