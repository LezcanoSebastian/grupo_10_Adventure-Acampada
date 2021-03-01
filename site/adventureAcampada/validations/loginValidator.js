const {check} = require('express-validator');

module.exports = [

    check('email')
    .isEmail().withMessage('debe ser un email válido'),

    check('pass')
    .notEmpty().withMessage('la contraseña es requerida')

]