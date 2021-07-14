const express = require('express');
const router = express.Router();

const indexController = require('../controllers/index');

router.get('/', indexController.home);
router.get('/site', indexController.site);  
router.get('/novarota', indexController.novaRota);

module.exports = router;
