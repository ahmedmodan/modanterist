const router = require('koa-router')();
const userRoutes = require('./users/userRoutes');
const pinRoutes = require('./pins/pinRoutes');
const koaBody = require('koa-body')({ multipart: true });



router.use('/users', userRoutes.routes());
router.use('/api/pins', koaBody, pinRoutes.routes());


module.exports = router;
