const configureLess = require('./config/configure-less');
const { devServer } = require('./config/dev-server');

module.exports = {
  chainWebpack(config) {
    configureLess(config);
  },
  lintOnSave: false,
  devServer,
};
