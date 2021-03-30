const {check, body} = require('express-validator');
const db = require('../database/models');

module.exports = [
    check('name')
    .notEmpty()
    .withMessage('El nombre es requerido'),

    body('name').custom(value => {
        return db.users.findOne({
            where : {
                name : value
            }
        })
        .then(user => {
            if(user){
                return Promise.reject('El nombre ya está registrado')
            }
        })
    }),

    check('name')
    .isLength({
        min : 5,
        max : 20
    })
    .withMessage('El nombre debe tener un min de 5 y max 20 caracteres'),

    check('price')
    .notEmpty()
    .withMessage('El precio es requerido'),

    check('discount')
    .isEmail()
    .withMessage('El descuento es requerido'),

    check('mark')
    .isEmail()
    .withMessage('El descuento es requerido'),

    check('origin')
    .isEmail()
    .withMessage('El descuento es requerido'),

    check('colors')
    .isEmail()
    .withMessage('El descuento es requerido'),

    check('size')
    .isEmail()
    .withMessage('El descuento es requerido'),

    check('material')
    .isEmail()
    .withMessage('El descuento es requerido'),

    check('category')
    .isEmail()
    .withMessage('El descuento es requerido'),

    check('stock')
    .isEmail()
    .withMessage('El descuento es requerido'),

    check('delibery')
    .isEmail()
    .withMessage('El descuento es requerido'),

    check('description')
    .isEmail()
    .withMessage('El descuento es requerido'),

    check('image-product')
    .isEmail()
    .withMessage('El descuento es requerido')   

]