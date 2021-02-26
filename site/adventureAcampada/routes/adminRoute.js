var express = require('express');
var router = express.Router();
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

/* requirero controladores */
const adminController = require('../controllers/adminController');
/* Ruta create product */
router.get('/product/create',  adminController.productCreate);
router.post('/product/create', upload.any(), adminController.store);
/* Listar productos */
router.get('/productList', adminController.list)

module.exports = router;
