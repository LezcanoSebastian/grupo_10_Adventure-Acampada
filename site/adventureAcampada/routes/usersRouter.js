var express = require('express');
var router = express.Router();

const {register,processRegister,login,processLogin,logout,profile, edit, update, eliminar, indexUser} = require('../controllers/usersController');

const uploadImages = require('../middlewares/uploadImages');
const registerValidator = require('../validations/registerValidator');
const loginValidator = require('../validations/loginValidator');
const perfilValidator = require('../validations/perfilValidator');


router.get('/register',register);
router.post('/register',uploadImages.any(),registerValidator, processRegister);

router.get('/login',login);
router.post('/login',loginValidator,processLogin);

router.get('/indexUser/:id',indexUser);

router.get('/profile/:id', profile);
router.get('/profile/edit/:id', edit);
router.put('/profile/update/:id',uploadImages.any(), perfilValidator, update);

router.delete('/delete/:id',eliminar);

router.get('/logout',logout);



module.exports = router;