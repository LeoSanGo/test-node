const express = require('express');
const router = express.Router();

const indexController = require('../controllers/index');

router.get('/', indexController.home);
<<<<<<< HEAD
router.get('/list', indexController.list);
=======
router.get('/site', indexController.site)
>>>>>>> d677d8ab424eb9aec565ccd2ce7aeb139b9ddf04

module.exports = router;
