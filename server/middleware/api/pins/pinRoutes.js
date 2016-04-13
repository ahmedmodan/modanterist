const pinController = require('./pinController.js');

const pinRoutes = require('koa-router')();

pinRoutes.post('/', function *() {
  console.log('i am in the server!');
  console.log(this.request);
});

pinRoutes.post('/savePin', pinController.savePin);
pinRoutes.get('/getPins', pinController.getPins);

module.exports = pinRoutes;
