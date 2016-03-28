const pinRoutes = require('koa-router')();

pinRoutes.post('/', function *() {
  console.log('i am in the server!');
  console.log(this.request);
});

module.exports = pinRoutes;
