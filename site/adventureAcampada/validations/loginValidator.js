const {check} = require('express-validator');

module.exports = [
    check('email')
    .isEmail()
    .withMessage('Debes escribir un email válido'),

    check('password')
    .notEmpty()
    .withMessage('Debes escribir tu contraseña')
]