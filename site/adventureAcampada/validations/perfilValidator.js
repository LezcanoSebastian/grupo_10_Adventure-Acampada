const {check, body} = require('express-validator');
const db = require('../database/models');

module.exports = [
    check('firstName')
    .notEmpty()
    .withMessage('El nombre es requerido'),

    check('lastName')
    .notEmpty()
    .withMessage('El Apellido es requerido'),

    check('firstName')
    .isLength({
        min : 6,
        max : 12
    })
    .withMessage('El nombre debe tener un min de 6 y max 12 caracteres'),

    check('lastName')
    .isLength({
        min : 6,
        max : 12
    })
    .withMessage('El nombre debe tener un min de 6 y max 12 caracteres')

]