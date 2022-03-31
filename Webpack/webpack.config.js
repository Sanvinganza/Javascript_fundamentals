const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    index: {
      import: path.resolve(__dirname, './src/index.js'),
    }
  },
  output: {
    filename: '[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, "build"),
  },
  resolve: {
    extensions: ['.js', '.png', '.svg', '.jpg']
  },
  plugins: [
    new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: false,
        analyzerPort: 3002,
      }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html"),
    }),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: [/\.css$/, /\.scss$/],
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        type: 'asset/resource'
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      maxSize: 20000
    },
  },
  devServer: {
    port: 3000
  }
};
