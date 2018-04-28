const express = require('express');
const proxy = require('http-proxy-middleware');

const app = express();
app.use('/static', express.static('static'));
app.use('/assets', express.static('assets'));
app.use('/api', proxy({
  target: 'https://m.yaohaozs.com/api',
  pathRewrite: { '^/api': '' },
  changeOrigin: true
}));
app.use('/uploads', proxy({
  target: 'https://m.yaohaozs.com/uploads',
  pathRewrite: { '^/uploads': '' },
  changeOrigin: true
}));
app.use('/', express.static(`${__dirname}/release`));
app.listen(8099);
console.log('服务器8099');
