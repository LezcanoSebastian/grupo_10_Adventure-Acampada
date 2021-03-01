/* variables */
var express = require('express');
var router = express.Router();

const { register, processRegister, login, processLogin, profile, fatality, eliminar } = require('../controllers/usersController');


/* middlewares */
const uploadImages = require('../middlewares/uploadImages');


router.get('/register',register);
router.post('/register',uploadImages.any(),processRegister);

router.get('/login',login);
router.post('/login', processLogin);

router.get('/profile',profile);

router.delete('/delete/:id',eliminar);

router.get('/logout',fatality);

module.exports = router;