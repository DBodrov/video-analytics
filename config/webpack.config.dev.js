const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const utils = require('../scripts/loadersTests');
const {resolveApp} = require('../scripts/paths');
const DotEnv = require('dotenv-webpack');
const commonConfig = require('./webpack.config.common');

module.exports = webpackMerge.merge(commonConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  bail: true,
  target: 'web',

  output: {
    path: resolveApp('dist'),
    pathinfo: true,
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js',
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: utils.tsxRegex,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
    runtimeChunk: {
      name: entrypoint => `runtime-${entrypoint.name}`,
    },
    emitOnErrors: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolveApp('public/index.html'),
      favicon: resolveApp('public/favicon.ico'),
      inject: true,
      hash: true,
      chunksSortMode: 'none',
    }),
    new ReactRefreshWebpackPlugin(),
    new DotEnv()
  ],

  devServer: {
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 3050,
    hot: true,
    stats: 'minimal',
    contentBase: resolveApp('src'),
    proxy: {
      '/api': {
        target: 'http://dev.va.mts.ru',
        changeOrigin: true,
      },
    },
  },
});
