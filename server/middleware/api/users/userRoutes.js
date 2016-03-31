const userRoutes = require('koa-router')();

userRoutes.post('/', function* () {
  console.log(this.request, 'this is the request');
  console.log(this.request.body, 'this is the body');
  this.response.status = 200;
  this.response.body = 'hello';
});

module.exports = userRoutes;
