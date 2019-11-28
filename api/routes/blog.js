const express = require('express');
const router = express.Router();

const headCtrl = require('../controllers/blog');

router.get('', headCtrl.getBlogData);

module.exports = router;
