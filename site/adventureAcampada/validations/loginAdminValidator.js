const {check} = require('express-validator');
/*const {getAdmins} = require('../data/admins');
const admins = getAdmins();*/

module.exports = [
    check('email')
    .notEmpty()
    .withMessage('El email de usuario es requerido'),
    
    check('password')
    .notEmpty()
    .withMessage('La password es requerida'),
]