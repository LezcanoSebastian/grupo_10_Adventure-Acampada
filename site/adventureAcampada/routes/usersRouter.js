var express = require('express');
var router = express.Router();

const {register,processRegister,login,processLogin,logout,profile, edit, update, eliminar} = require('../controllers/usersController');

const uploadImages = require('../middlewares/uploadImages');
const registerValidator = require('../validations/registerValidator');
const loginValidator = require('../validations/loginValidator');


router.get('/register',register);
router.post('/register',uploadImages.any(),registerValidator, processRegister);

router.get('/login',login);
router.post('/login',loginValidator,processLogin);

router.get('/profile/:id', profile);
router.get('/profile/edit/:id', edit)
router.put('/profile/update/:id', update)

router.delete('/delete/:id',eliminar);

router.get('/logout',logout);



module.exports = router;