/*   
const {check,validationResult,body} = require('express-validator');
const {getAdmins} = require('../data/users');
const admins = getAdmins();

module.exports = [
    check('firstName')
    .notEmpty()
    .withMessage('El nombre de usuario es requerido'),

    check('firstName')
    .isLength({
        min:3,
        max:20
    })
    .withMessage('El nombre debe tener un min de '),
    
    check('password')
    .notEmpty()
    .withMessage('La password es requerida'),

    check('password')
    .isLength({
        min:3,
        max:8
    })
    .withMessage('La password de mas de 3 letras, por favor!'),


    body('firstName').custom(value => {
        let result = admins.find(admin => admin.username.toLowerCase() === value.toLowerCase().trim()); 

        if (result) {
            return false            
        }else {
            return true
        }
    }).withMessage('El usuario ya esta registrado!')
] */

//custom --> se puede personalizar una validacion