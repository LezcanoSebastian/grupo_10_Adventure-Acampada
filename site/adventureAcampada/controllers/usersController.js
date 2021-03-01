const fs = require('fs');
const path = require('path')
const bcrypt = require('bcrypt');
const users_db = JSON.parse(fs.readFileSync('./data/users.json','utf-8'));

const {validationResult} = require('express-validator');

module.exports = {
    register : (req,res) => {
        res.render('users/register')
    },
    processRegister : (req,res) => {

        let errores = validationResult(req);

        if(!errores.isEmpty()){
            return res.render('users/register',{
                errores : errores.mapped(),
                old: req.body
            })
        }else{
            const {firstname, lastname, email, pass,category, image} = req.body;
        
            let lastID = 0;
            users_db.forEach(user => {
                if (user.id > lastID) {
                    lastID = user.id
                }
            });
    
            let hashPass = bcrypt.hashSync(pass, 12);
    
            let newUser = {
                id : +lastID + 1,
                firstname,
                lastname,
                email,
                pass: hashPass,
                category,
                image: req.files[0].filename // 'sin imagen'
            };
    
            users_db.push(newUser);
    
            fs.writeFileSync('./data/users.json',JSON.stringify(users_db,null,2));
            
            return res.redirect('/users/login')
        }
       
    },
    login : (req, res) => {
        res.render('users/login')
    },
    processLogin : (req, res) => {
      
        let errores = validationResult(req);

        if(!errores.isEmpty()){
            return res.render('users/login',{
                errores : errores.errors
            })
        }else{
            const {email,pass, recordar} = req.body;

            let result = users_db.find(user => user.email === email);

            if(result){
                if(bcrypt.compareSync(pass.trim(),result.pass)){

                    req.session.user = {
                        id : result.id,
                        firstname : result.firstname,
                        image: result.image
                    }

                    if(recordar){
                        res.cookie('userAcampada',req.session.user,{
                            maxAge : 1000 * 60
                        })
                    }

                    return res.redirect('/users/profile')
                }
            }
            return res.render('users/login',{
                errores : [
                    {
                        msg : "credenciales inválidas"
                    }
                ]
            })
        }
    },
    profile : (req,res) => {
        res.render('users/profile')
    },
    fatality : (req,res) => {
        req.session.destroy();
        if(req.cookies.userAcampada){
            res.cookie('userAcampada','',{
                maxAge : -1
            })
        }
        res.redirect('/')
    },
 
}