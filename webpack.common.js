const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");
const MomentLocalesPlugin = require("moment-locales-webpack-plugin");
module.exports = {

  entry: "./src/app.js",
  plugins: [

    // To strip all locales except “en”
    new MomentLocalesPlugin(),
    // new HtmlWebpackPlugin({
    //           title: 'Production',
    //             template: "./public/index.html",
    //             filename: './index.html'
              
    //       }),
    // Or: To strip all locales except “en”, “es-us” and “ru”
    // (“en” is built into Moment and can’t be removed)
    new MomentLocalesPlugin({
      localesToKeep: ["es-us", "ru"]
    })
  ],
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
         use:  [ "css-loader", "less-loader"]
      
      },
      {
        test: /\.s?css$/,
    use:  [ "css-loader", "sass-loader"]
      }
    ]
  },
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  }
};
