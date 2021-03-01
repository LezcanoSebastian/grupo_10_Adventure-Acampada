var express = require('express');
var router = express.Router();

/* requirero controladores */
const homeController = require('../controllers/homeController');
/* ruta a home */
router.get('/', homeController.home);

module.exports = router;
