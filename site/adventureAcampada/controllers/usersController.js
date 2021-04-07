const {validationResult} = require('express-validator');
const { Sequelize } = require('sequelize')
const db = require('../database/models');
const bcrypt = require('bcrypt');
const path = require('path');


module.exports = {
    register : (req,res) => {
        res.render('users/register', {
            title: 'Registrate'
        })
    },
    processRegister : (req,res) => {
        const errores=validationResult(req);
        
        if(!errores.isEmpty()){
            if(req.files[0]){
                fs.unlinkSync('public/img/avatar/'+req.files[0].filename)
            }
            return res.render('users/login',{
                errores : errores.mapped(),
                old:req.body                
            })
        }else{
            
            
            const {firstName,lastName, email, password,rol,avatar} = req.body;
            db.users.create({
                firstName : firstName.trim(),
                lastName : lastName.trim(),
                email : email.trim(),
                password : bcrypt.hashSync(password,12),
                rol : "user",
                avatar : (req.files[0]) ? req.files[0].filename : "default.png"
            })
            .then(()=>{
                res.redirect('/users/login');
            })
            .catch(error => console.log(error))
        }
    },
    login : (req,res) => {
        res.render('users/login', {
            title: 'Iniciar sesión'
        })
    },
    processLogin : (req,res) => {
        let errores = validationResult(req);
        //res.send();
        if(errores.isEmpty()){
            const {email, password, recordar} = req.body;

            db.users.findOne({
                where : {
                    email : email
                }
            })
            .then(users => {
                if(users && bcrypt.compareSync(password, users.password)){
                    req.session.user = {
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
    indexUser: (req, res) => {

        db.users.findOne({
            where : {
                id :  req.params.id
            }
            
        })
        .then(user => {
            return res.render('users/indexUser',{
                title: "Principal",
                user
            })
        })
        .catch(error => res.send(error))
    },
    profile: (req, res) => {

        db.users.findOne({
            where : {
                id :  req.params.id
            }
            
        })
        .then(user => {
            return res.render('users/profile',{
                title: "Mi perfil",
                user
            })
        })
        .catch(error => res.send(error))
    },
    eliminar: (req, res) => {
        let user = db.users.findByPk(req.params.id);
        let remove = db.users.destroy({
            where: {
                id: req.params.id
            }
        });
        
        Promise.all([user,remove])
        .then(([user,remove])=>{
            
            if(user.avatar != 'default.png') {
                fs.unlinkSync('public/img/avatar/' + user.avatar)
            }
            
            req.session.destroy();
            if(req.cookies.recordar){
                res.cookie('recordar','',{
                    maxAge : -1
                })
            }            
        })
        .then(()=> res.redirect('/'))
        .catch(error => res.send(error))    
    },
    edit: (req, res) => {
        db.users.findByPk(req.params.id)
        .then((user)=>{
            return res.render('users/profile',{
                title: 'Editar perfil',
                user
            })
        })
        .catch(error => res.send(error))
    },
    update: (req, res, next) => {
        let errores = validationResult(req);
        
        if(errores.isEmpty()){
            const {firstName,lastName,avatar} = req.body;
            db.users.update({
                firstName : firstName,
                lastName : lastName,
                avatar : req.files[0].filename
            },
            {
                where : {
                    id : req.params.id
                }
            })
            .then(() => {
                return res.redirect('/users/indexUser/'+req.params.id)
            })
            .catch(error => res.send(error))
        }else{
            return res.render('users/profile/'+req.params.id,{
                errores : errores.mapped(),
                old: req.body
            })
        }        
    }
    
}