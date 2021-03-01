/* variables */
var express = require('express');
var router = express.Router();

const { register, processRegister, login, processLogin, profile, fatality} = require('../controllers/usersController');


/* middlewares */
const uploadImages = require('../middlewares/uploadImages');
const registerValidator = require('../validations/registerValidator');
const checkUser = require('../middlewares/checkUser');
const loginValidator = require('../validations/loginValidator');

router.get('/register',register);
router.post('/register',uploadImages.any(), registerValidator, processRegister);

router.get('/login',login);
router.post('/login',loginValidator, processLogin);

router.get('/profile',checkUser ,profile);

router.get('/logout',fatality);

module.exports = router;