const express = require('express');
const router = express.Router();

const indexController = require('../controllers/index');

router.get('/', indexController.home);
router.get('/novarota', indexController.novaRota);
router.get('/list', indexController.list);

module.exports = router;
