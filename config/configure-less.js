const pathBuilder = require('path');
const rootDir = require('../root-dir');

function setCommonOptions(options) {
  return {
    ...options,
    javascriptEnabled: true,
  };
}

// Делаем, что все "less" файлы считаются модулями, кроме тех, что в папке "src/styles"
module.exports = config => {
  config.module
    .rule('less')
    .oneOf('normal')
    .use('less-loader')
    .tap(setCommonOptions);
  config.module
    .rule('less')
    .oneOf('normal-modules')
    .set('test', /\.less$/)
    .merge({
      include: [pathBuilder.resolve(rootDir, 'src')],
      exclude: [pathBuilder.resolve(rootDir, 'src', 'styles')],
    })
    .use('less-loader')
    .tap(setCommonOptions);
};
