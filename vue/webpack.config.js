const { VueLoaderPlugin } = require("vue-loader");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const config = {
  entry: __dirname + "/index.js",
  output: {
    filename: 'static/runtime.js',
    path: __dirname,
    library: 'odcp-vue',
    libraryTarget: 'umd',
    jsonpFunction: `webpackJsonp_odcp-vue`,
  },
  devtool: 'none',

  devServer: {
    disableHostCheck: true,
    contentBase: "./", 
    historyApiFallback: true,
    inline: true,
    hot: true,
    port: 9001
  },

  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".vue", '.css'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
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
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          extractCSS: true
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader'
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: "file-loader"
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: `/static/css/[name].[hash:8].css`
    }),
  ],

  mode: 'development'
}

module.exports = config;