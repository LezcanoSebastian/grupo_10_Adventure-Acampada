const express = require('express');
const router = express.Router();


const {productsindex,productsList,productsCreate,productsStore,productsEdit,productsUpdate,productsDelete}= require('../controllers/adminController');

//Middlewares

const upload = require('../middlewares/subidaImagenes');


router.get('/',productsindex);
router.get('/products/list',productsList);

router.get('/products/create',productsCreate);//trae el formulario nada mas
router.post('/products/store',upload.any(),productsStore);//crea el registro

router.get('/products/edit/:id',productsEdit);//trae el formulario nada mas
router.put('/products/update/:id', productsUpdate);//envia los datos para actualizarlos

router.delete('/products/delete/:id',upload.any(),productsDelete);//busca y registro y lo borra
//Los buscadores van por get

module.exports = router;
