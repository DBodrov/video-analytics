const API_SERVER = 'http://dev-va-0002.msk.mts.ru';
const PORT = 3050;

const devServer = {
  proxy: {
    '/api': {
      target: API_SERVER,
      changeOrigin: true,
    },
  },
  port: PORT,
};

module.exports = { devServer };
