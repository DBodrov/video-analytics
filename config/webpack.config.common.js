const {resolveApp} = require('../scripts/paths');

module.exports = {
  entry: {
    app: resolveApp('src/index.tsx'),
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@': resolveApp('src'),
      utils: resolveApp('src/utils'),
      pages: resolveApp('src/pages'),
      context: resolveApp('src/context'),
    },
  },

  module: {
    rules: [
      {
        test: /\.(woff|woff2|ttf|eot|ico)$/,
        loader: require.resolve('file-loader'),
        options: {
          name: 'media/[name].[hash:8].[ext]',
        },
      },
      {
        test: [/\.png$/, /\.gif$/, /\.jpg$/, /\.svg$/],
        loader: require.resolve('url-loader'),
        options: {
          limit: '10000',
          name: 'media/[name].[hash:8].[ext]',
        },
      },
    ],
  },
};
