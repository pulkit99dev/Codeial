const express = require('express');

const router = express.Router();

const payController = require('../controller/pay_controller');

router.get('/payment', payController.pay);

module.exports = router;