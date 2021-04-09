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
    .withMessage('El nombre debe tener un min de 6 y max 12 caracteres'),

    check('telefono')
    .isLength({
        min : 7,
        max : 20
    })
    .withMessage('El telefono debe tener un min de 7 y max 20 caracteres'),

    check('telefono')
    .notEmpty()
    .withMessage('El telefono debe tener un min de 7 y max 20 caracteres')
]