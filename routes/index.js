const express = require('express');
const router = express.Router();

const indexController = require('../controllers/index');

router.get('/', indexController.home);
<<<<<<< HEAD
router.get('/site', indexController.site);  
router.get('/novarota', indexController.novaRota);
=======
router.get('/list', indexController.list);
>>>>>>> 9ac5d0a55a82dd633c826547bfdd476a9e24f0a3

module.exports = router;
