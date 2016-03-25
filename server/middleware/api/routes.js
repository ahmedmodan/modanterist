const router = require('koa-router')();
const userRoutes = require('./users/userRoutes');

router.use('/users', userRoutes.routes());
router.user('/api/pins', pinRoutes.routes());

module.exports = router;
