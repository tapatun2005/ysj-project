const { Config } = require('./config');

const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  entry: Config.views,
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "[name].bundle.js"
  },
  resolve: {
    alias: {
      '@styles': path.resolve(__dirname, '../src/styles/'),
    },
  },
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "../dist"),
    compress: true,
    port: 3000,
    overlay: true
  },
  devtool: "cheap-module-eval-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [Config.babelLoader, "eslint-loader"]
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader'
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          // "css-loader", // translates CSS into CommonJS
          // "postcss-loader", // Loader for webpack to process CSS with PostCSS
          // "sass-loader" // compiles Sass to CSS, using Node Sass by default
          {
            loader: 'css-loader',
            options: {
                sourceMap: true
            }
          },
          {
              loader: 'postcss-loader',
              options: {
                  sourceMap: true
              },
          },
          {
              loader: 'sass-loader',
              options: {
                  sourceMap: true
              }
          }
        ]
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: [
          {
            loader: "file-loader", // This will resolves import/require() on a file into a url and emits the file into the output directory.
            options: {
              name: "[name].[ext]",
              outputPath: "assets/"
            }
          },
        ]
      },
      {
        test: /\.(html)$/,
        use: {
          loader: "html-loader",
          options: {
            attrs: ["img:src", ":data-src"],
            minimize: true,
            interpolate: true
          }
        }
      },
      { 
        test: /\.pug$/,
        use: {
          loader: "pug-loader",
        }
      }
    ]
  },
  plugins: [
    // CleanWebpackPlugin will do some clean up/remove folder before build
    // In this case, this plugin will remove 'dist' and 'build' folder before re-build again
    new CleanWebpackPlugin(),
    // The plugin will generate an HTML5 file for you that includes all your webpack bundles in the body using script tags
    // new HtmlWebpackPlugin({
    //   template: "./src/index.html",
    //   filename: "index.html"
    // }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../src/assets/'),
          to: "../dist/assets/",
        }
      ],
    }),
    ...Config.htmlPlugins
  ]
};
