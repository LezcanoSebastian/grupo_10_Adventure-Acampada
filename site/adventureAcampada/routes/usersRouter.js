/* variables */
var express = require('express');
var router = express.Router();

const { register, processRegister, login, processLogin, profile, logout, eliminar } = require('../controllers/usersController');


/* middlewares */
const uploadImages = require('../middlewares/uploadImages');
const checkUser = require('../middlewares/checkUser');


router.get('/register',register);
router.post('/register',uploadImages.any(),processRegister);

router.get('/login',login);
router.post('/login', processLogin);

router.get('/profile', checkUser, profile);

router.delete('/delete/:id',eliminar);

router.get('/logout', logout);

module.exports = router;