const express = require('express');
const router = express.Router();
const ping = require('./ping')
const redis = require('./redis')
const mysql = require('./mysql')
const mongoose = require('./mongoose')

router.use('/ping', ping)
router.use('/redis', redis)
router.use('/mysql', mysql)
router.use('/mongoose', mongoose)

module.exports = router
