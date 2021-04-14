var express = require('express');
var router = express.Router();

const {register,processRegister,login,processLogin,logout,profile, edit, update, eliminar, indexUser} = require('../controllers/usersController');

const uploadImages = require('../middlewares/uploadImages');
const registerValidator = require('../validations/registerValidator');
const loginValidator = require('../validations/loginValidator');
const perfilValidator = require('../validations/perfilValidator');
const checkUser = require('../middlewares/checkUser');



router.get('/register',register);
router.post('/register',uploadImages.any(),registerValidator, processRegister);

router.get('/login',login);
router.post('/login',loginValidator,processLogin);

router.get('/indexUser/:id',checkUser,indexUser);

router.get('/profile/:id', checkUser,profile);
router.get('/profile/edit/:id', checkUser,edit);
router.put('/profile/update/:id',uploadImages.any(), perfilValidator, checkUser,update);

router.delete('/delete/:id',checkUser,eliminar);

router.get('/logout',checkUser,logout);



module.exports = router;