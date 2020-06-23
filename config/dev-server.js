const DEV_SERVER_ADDRESS = 'http://va-test.mts.ru';
const PORT = 3050;

const devServer = {
  port: PORT,
  proxy: {
    '/api': {
      target: DEV_SERVER_ADDRESS,
      ws: true,
      changeOrigin: true,
    },
  },
};

module.exports = { devServer };
