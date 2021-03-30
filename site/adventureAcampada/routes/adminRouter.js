const express = require('express');
const router = express.Router();



const {index,productsList,productsCreate,productsStore,productsEdit,productsUpdate,productsDelete}= require('../controllers/adminController');

//Middlewares

const upload = require('../middlewares/subidaImagenes');
const productValidator = require('../validations/productValidator');
const checkAdmin = require('../middlewares/checkAdmin');
const checkUser = require('../middlewares/checkUser');


router.get('/', index);

router.get('/products/list',  productsList);

router.get('/products/create',   productsCreate);//trae el formulario nada mas
router.post('/products/store',upload.any(), productValidator, productsStore);//crea el registro

router.get('/products/edit/:id',   productsEdit);//trae el formulario nada mas
router.put('/products/update/:id',upload.any(), productsUpdate);//envia los datos para actualizarlos

router.delete('/products/delete/:id',   productsDelete);//busca y registro y lo borra
//Los buscadores van por get

module.exports = router;
