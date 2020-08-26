const express = require('express')

const router = express.Router();
const homeController = require('../controller/home_controller')

console.log('router loaded');

router.get('/', homeController.home);
router.use('/user', require('./users'))

router.use('/pay', require('./payment'))

module.exports = router;