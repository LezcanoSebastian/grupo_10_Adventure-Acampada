const {check, body} = require('express-validator');
const db = require('../database/models');

module.exports = [
    check('firstName')
    .notEmpty()
    .withMessage('El nombre es requerido'),

    check('lastName')
    .notEmpty()
    .withMessage('El Apellido es requerido'),

    check('email')
    .isEmail()
    .withMessage('Debes escribir un email válido'),

    body('email').custom(value => {
        return db.users.findOne({
            where : {
                email : value
            }
        })
        .then(user => {
            if(user){
                return Promise.reject('Este email ya está registrado')
            }
        })
    }),

    check('password')
    .isLength({
        min : 6,
        max : 12
    })
    .withMessage('La contraseña debe tener un min de 6 y max 12 caracteres'),

    body('password2').custom((value,{req})=> value !== req.body.password ? false : true)
    .withMessage('Las contraseñas no coinciden'),

    check('bases')
    .isString('on')
    .withMessage('Debes aceptar las bases y condiciones')

]