const express = require('express');
const router = express.Router();

const Ctrl = require('../controllers/products');

router.get('/styles', Ctrl.getStyles);

module.exports = router;
