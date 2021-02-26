var express = require('express');
var router = express.Router();

/* Controller require */
const productsController = require('../controllers/productsController');

/* Listado de todos los productos */
router.get('/', productsController.list)

/* Detalle del producto */
router.get('/detail/:productId', productsController.detail);
/* Carrito */
router.get('/carrito', productsController.carrito)
/* Formulario de carga de producto */
router.get('/list', productsController.list);


module.exports = router;