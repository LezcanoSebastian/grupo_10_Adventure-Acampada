const {check, body} = require('express-validator');
const db = require('../database/models');

module.exports = [
    check('name')
    .notEmpty()
    .withMessage('El nombre es requerido'),

    check('name')
    .isLength({
        min : 2,
        max : 100
    })
    .withMessage('El nombre debe tener un min de 5 y max 20 caracteres'),

    check('price')
    .notEmpty()
    .withMessage('El precio es requerido'),

    check('discount')
    .notEmpty()
    .withMessage('El descuento es requerido'),

    check('mark')
    .notEmpty()
    .withMessage('El campo de marca es requerido'),

    check('origin')
    .notEmpty()
    .withMessage('El campo de origen es requerido'),

    check('color')
    .notEmpty()
    .withMessage('El campo de color es requerido'),

    check('size')
    .notEmpty()
    .withMessage('El campo de talle es requerido'),

    check('material')
    .notEmpty()
    .withMessage('El campo de material es requerido'),

    check('ID_category')
    .notEmpty()
    .withMessage('El campo categoria es requerido'),

    check('stock')
    .notEmpty()
    .withMessage('El campo stock es requerido'),


]