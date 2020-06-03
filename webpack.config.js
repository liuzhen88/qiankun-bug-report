const config = {
  entry: __dirname + "/index.js",
  output: {
    filename: 'bundle.js',
    path: __dirname
  },
  devtool: 'none',

  devServer: {
    disableHostCheck: true,
    contentBase: "./", 
    historyApiFallback: true,
    inline: true,
    hot: true,
    port: 9000,
    proxy: {
      '/vue': {
        target: 'http://localhost:9001',
        changeOrigin: true,
        pathRewrite: {
          "^/vue": ""
        }
      },
      "/static": {
        target: 'http://localhost:9001',
        changeOrigin: true
      },
      "/fonts": {
        target: 'https://unpkg.com/element-ui@2.13.2/lib/theme-chalk',
        changeOrigin: true
      }
    }
  },

  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: "babel-loader"
        },
        exclude: /node_modules/
      }
    ]
  },

  mode: 'development'
}

module.exports = config;