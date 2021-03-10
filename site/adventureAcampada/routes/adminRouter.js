const express = require('express');
const router = express.Router();



const {index,productsList,productsCreate,productsStore,productsEdit,productsUpdate,productsDelete}= require('../controllers/adminController');

//Middlewares

const upload = require('../middlewares/subidaImagenes');
const checkAdmin = require('../middlewares/checkAdmin');
const checkUser = require('../middlewares/checkUser');


router.get('/', checkUser, checkAdmin, index);

router.get('/products/list', checkAdmin, productsList);

router.get('/products/create', checkAdmin,  productsCreate);//trae el formulario nada mas
router.post('/products/store',upload.any(), checkAdmin,  productsStore);//crea el registro

router.get('/products/edit/:id', checkAdmin,  productsEdit);//trae el formulario nada mas
router.put('/products/update/:id',upload.any(), checkAdmin,  productsUpdate);//envia los datos para actualizarlos

router.delete('/products/delete/:id', checkAdmin,  productsDelete);//busca y registro y lo borra
//Los buscadores van por get

module.exports = router;
