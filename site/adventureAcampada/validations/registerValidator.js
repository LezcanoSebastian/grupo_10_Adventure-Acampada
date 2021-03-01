const fs = require('fs');
const {check, body} = require('express-validator');
const users_db = JSON.parse(fs.readFileSync('./data/users.json','utf-8'));

module.exports = [
    check('firstname')
    .notEmpty().withMessage('el nombre es requerido'),

    check('lastname')
    .notEmpty().withMessage('el apellido es requerido'),

    check('email')
    .isEmail().withMessage('debe ser un email válido'),

    body('email').custom(value => {
        let result = users_db.find(user => user.email === value);

        if(result){
            return false
        }else{
            return true
        }
    }).withMessage('El email está registrado'),

    check('pass')
    .isLength({
        min : 6,
        max : 12
    }).withMessage('la contraseña debe tener un minimo de 6, máximo  de 12 caracteres'),

    body('pass2').custom((value, {req}) => {
        if(value !== req.body.pass){
            return false
        }else{
            return true
        }
    }).withMessage('las contraseñas no coinciden!!'),


]