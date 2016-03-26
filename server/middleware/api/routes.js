const router = require('koa-router')();
const userRoutes = require('./users/userRoutes');
const pinRoutes = require('./pins/pinRoutes');

router.use('/users', userRoutes.routes());
router.use('/api/pins', pinRoutes.routes());

module.exports = router;
