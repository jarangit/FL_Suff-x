const { createProxyMiddleware } = require('http-proxy-middleware');
const proxy = {
    target: 'https://www.suffix.works/api-v2',
    changeOrigin: true
}
module.exports = function(app) {
  app.use(
    '/api/',
    createProxyMiddleware(proxy)
  );
};