const { createProxyMiddleware } = require('http-proxy-middleware');
const proxy = {
    target: 'https://128.199.72.95/api-v2',
    changeOrigin: true
}
module.exports = function(app) {
  app.use(
    '/api/',
    createProxyMiddleware(proxy)
  );
};