const express = require('express');
const router = express.Router();



const {index,productsList,productsCreate,productsStore,productsEdit,productsUpdate,productsDelete}= require('../controllers/adminController');

//Middlewares

const upload = require('../middlewares/subidaImagenes');
const checkUser = require('../middlewares/checkUser');
const checkAdmin = require('../middlewares/checkAdmin');

router.get('/', checkUser, checkAdmin, index);

router.get('/products/list', checkUser, checkAdmin,  productsList);

router.get('/products/create', checkUser, checkAdmin,  productsCreate);//trae el formulario nada mas
router.post('/products/store',upload.any(), checkUser, checkAdmin,  productsStore);//crea el registro

router.get('/products/edit/:id', checkUser, checkAdmin,  productsEdit);//trae el formulario nada mas
router.put('/products/update/:id',upload.any(), checkUser, checkAdmin,  productsUpdate);//envia los datos para actualizarlos

router.delete('/products/delete/:id', checkUser, checkAdmin,  productsDelete);//busca y registro y lo borra
//Los buscadores van por get

module.exports = router;
