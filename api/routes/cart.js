const express = require('express');
const router = express.Router();

const Ctrl = require('../controllers/cart');

router.post('/add', Ctrl.addToCart);

module.exports = router;
