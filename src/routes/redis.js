const express = require('express');
const router = express.Router();
const errorWrapper = require('../middlewares/errorWrapperMiddlewares')
const { get, set } = require('../controllers/redisControllers')

router.get('/:key', errorWrapper(get));
router.post('/:key', errorWrapper(set));

module.exports = router
