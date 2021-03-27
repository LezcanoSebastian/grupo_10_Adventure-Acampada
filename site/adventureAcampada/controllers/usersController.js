const {validationResult} = require('express-validator');
const { Sequelize } = require('sequelize')
const db = require('../database/models');
const bcrypt = require('bcrypt');


module.exports = {
    register : (req,res) => {
        res.render('users/register', {
            title: 'Registrate'
        })
    },
    processRegister : (req,res) => {
        let errores = validationResult(req);

        if(errores.isEmpty()){
            const {id,firstName,lastName, email, password,avatar, rol} = req.body;
            db.users.create({
                id: id,
                firstName : firstName.trim(),
                lastName : lastName.trim(),
                email,
                password : bcrypt.hashSync(password,12),
                rol,
                avatar
            })
            .then(()=>res.redirect('users/login'))
            .catch(error => res.send(error))
        }else{
            return res.render('users/register',{
                errores : errores.mapped(),
                old: req.body
            })
        }
    },
    login : (req,res) => {
        res.render('users/login', {
            title: 'Iniciar sesión'
        })
    },
    processLogin : (req,res) => {
        let errores = validationResult(req);
        if(errores.isEmpty()){
            const {email, password, recordar} = req.body;

            db.users.findOne({
                where : {
                    email : email
                }
            })
            .then(users => {
                if(users && bcrypt.compareSync(password, users.password)){
                    req.session.userLogin = {
                        id : users.id,
                        firstName : users.firstName,
                        rol : users.rol,
                        avatar : users.avatar
                    }
                    if(recordar){
                        res.cookie('userAcampada',req.session.userLogin, {
                            maxAge : 1000 * 60
                        })
                    }
                    return res.redirect('/')
                }else {
                    return res.render('users/login',{
                        errores :{
                            invalid : {
                                msg : "Credenciales inválidas"
                            }
                        }
                    })
                }
            })
        }else{
            return res.render('users/login',{
                errores : errores.mapped(),
                old : req.body
            })
        }
    },
    logout : (req,res) => {
        req.session.destroy();
        if(req.cookies.userAcampada){
            res.cookie('userAcampada','', {maxAge : -1})
        }
        return res.redirect('/')
    },
    profile : (req,res) => {
        res.render('users/profile')
    }
}