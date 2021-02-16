var express = require('express');
var router = express.Router();

/* Controller require */
const productsController = require('../controllers/productsController')

/* Detalle del producto */
router.get('/detail', productsController.detail);
/* Carrito */
router.get('/carrito', productsController.carrito)
/* Formulario de carga de producto */
router.get('/form', productsController.form);


module.exports = router;