const express = require('express');
const router = express.Router();

const Ctrl = require('../controllers/cart');

router.post('/add', Ctrl.addToCart);
router.get('/get', Ctrl.getCart);

module.exports = router;
