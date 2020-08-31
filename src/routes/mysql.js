const express = require('express');
const router = express.Router();
const errorWrapper = require('../middlewares/errorWrapperMiddlewares')
const { list, create } = require('../controllers/mysqlControllers')

router.get('/demo', errorWrapper(list));
router.post('/demo', errorWrapper(create));

module.exports = router
