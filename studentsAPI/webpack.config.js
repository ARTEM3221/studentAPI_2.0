const path = require('path');
const webpack = require('webpack');
<<<<<<< HEAD


module.exports = {

=======
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: './src/main.js',
  
>>>>>>> 0f5d9839de1a0cee86baa6340c3ed388f61ea7d1
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
<<<<<<< HEAD
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
=======
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
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
    }),
    new VueLoaderPlugin()
  ]
};
>>>>>>> 0f5d9839de1a0cee86baa6340c3ed388f61ea7d1
