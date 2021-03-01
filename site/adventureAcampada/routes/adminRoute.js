const express = require('express');
const router = express.Router();



const {index,productsList,productsCreate,productsStore,productsEdit,productsUpdate,productsDelete}= require('../controllers/adminController');

//Middlewares

const upload = require('../middlewares/subidaImagenes');
const checkUser = require('../middlewares/checkUser');

router.get('/', checkUser, index);

router.get('/products/list', checkUser, productsList);

router.get('/products/create', checkUser, productsCreate);//trae el formulario nada mas
router.post('/products/store',upload.any(), checkUser, productsStore);//crea el registro

router.get('/products/edit/:id', checkUser, productsEdit);//trae el formulario nada mas
router.put('/products/update/:id',upload.any(), checkUser, productsUpdate);//envia los datos para actualizarlos

router.delete('/products/delete/:id', checkUser, productsDelete);//busca y registro y lo borra
//Los buscadores van por get

module.exports = router;
