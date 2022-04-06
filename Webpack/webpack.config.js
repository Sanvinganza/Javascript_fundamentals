const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BrotliWebpackPlugin = require("brotli-webpack-plugin");

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;
const optimization = () => {
  const config = {
    splitChunks: {
      chunks: "all",
      maxSize: 200000,
    },
  };

  if (isProd) {
    config.minimizer = [
      new OptimizeCssAssetWebpackPlugin(),
      new TerserWebpackPlugin(),
    ];
  }

  return config;
};

const plugins = () => {
  const base = [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html"),
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new CleanWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "./src/assets"),
          to: path.resolve(__dirname, "./dist/assets"),
        },
      ],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/assets"),
          to: path.resolve(__dirname, "dist/assets"),
        },
      ],
    }),
    new MiniCssExtractPlugin(),
  ];

  if (isProd) {
    base.push(
      new BrotliWebpackPlugin({
        asset: '[path].br[query]',
        test: /\.(js|css|html|png)$/,
        threshold: 10240,
        minRatio: 0.8
      })
    );
  } else {
    base.push(
      new BundleAnalyzerPlugin({
        analyzerMode: "static",
        openAnalyzer: false,
        analyzerPort: 3002,
      })
    );
  }

  return base;
};

const cssLoaders = (extra) => {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
    },
    "css-loader",
  ];

  if (extra) {
    loaders.push(extra);
  }

  return loaders;
};

const babelOptions = (preset) => {
  const opts = {
    presets: ["@babel/preset-env"],
    plugins: ["@babel/plugin-proposal-class-properties"],
  };

  if (preset) {
    opts.presets.push(preset);
  }

  return opts;
};

const jsLoaders = () => {
  const loaders = [
    {
      loader: "babel-loader",
      options: babelOptions(),
    },
  ];

  if (isDev) {
    loaders.push("eslint-loader");
  }

  return loaders;
};

module.exports = {
  context: path.resolve(__dirname, "src"),
  devtool: isDev ? "source-map" : "eval",
  optimization: optimization(),
  mode: isDev ? "development" : "production",
  devServer: {
    port: 3000,
    hot: isDev,
  },
  entry: {
    index: {
      import: path.resolve(__dirname, "./src/index.js"),
    },
  },
  resolve: {
    extensions: [".js", ".json"],
  },
  output: {
    filename: "[name].[contenthash].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: plugins(),
  module: {
    rules: [
      {
        test: /\.css$/,
        use: cssLoaders(),
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: jsLoaders(),
      },
      {
        test: /\.less$/,
        use: cssLoaders("less-loader"),
      },
      {
        test: /\.s[ac]ss$/,
        use: cssLoaders("sass-loader"),
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: {
          loader: "url-loader",
        },
      },
    ],
  },
};
