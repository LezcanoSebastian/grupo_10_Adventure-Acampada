const express = require('express');
const router = express.Router();
var path = require('path')
var multer = require('multer');
/* Configuracion de multer */
var storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, '../adventureAcampada/public/img/products')
    },
    filename:(req, file, cb) =>{
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
var upload = multer({storage : storage});



const {productsindex,productsList,productsCreate,productsStore,productsEdit,productsUpdate,productsDelete}= require('../controllers/adminController');


router.get('/',productsindex);
router.get('/products/list',productsList);

router.get('/products/create',productsCreate);//trae el formulario nada mas
router.post('/products/store',upload.any(), productsStore);//crea el registro

router.get('/products/edit/:id',productsEdit);//trae el formulario nada mas
router.put('/products/update/:id', upload.any(), productsUpdate);//envia los datos para actualizarlos

router.delete('/products/delete/:id',productsDelete);//busca y registro y lo borra
//Los buscadores van por get

module.exports = router;