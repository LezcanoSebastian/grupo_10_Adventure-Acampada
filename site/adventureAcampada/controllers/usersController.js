const fs = require('fs');
const path = require('path')
const bcrypt = require('bcrypt');
const users_db = JSON.parse(fs.readFileSync('./data/users.json','utf-8'));

const {validationResult} = require('express-validator');

module.exports = {
    register : (req,res) => {
        res.render('users/register',{
            title: 'Registrate'
        })
    },
    processRegister : (req,res) => {

        let errores = validationResult(req);

        if(!errores.isEmpty()){
            return res.render('users/register',{
                errores : errores.errors
            })
        }else{
            const {firstName, lastName, email, password, category, image} = req.body;
        
            let lastID = 0;
            users_db.forEach(user => {
                if (user.id > lastID) {
                    lastID = user.id
                }
            });
    
            let hashPass = bcrypt.hashSync(password, 12);
    
            let newUser = {
                id : +lastID + 1,
                firstName,
                lastName,
                email,
                password : hashPass,
                category,
                image : (req.files[0])?req.files[0].filename:"default.png"
            };
    
            users_db.push(newUser);
    
            fs.writeFileSync('./data/users.json',JSON.stringify(users_db,null,2));
            
            return res.redirect('/users/login')
        }
       
    },
    login : (req, res) => {
        res.render('users/login', {
            title: 'Iniciar sesión'
        })
    },
    processLogin : (req, res) => {
      
        let errores = validationResult(req);

        if(!errores.isEmpty()){
            return res.render('users/login',{
                errores : errores.errors
            })
        }else{
            const {email, password, recordar, category, id} = req.body;

            let result = users_db.find(user => user.email === email);

            if(result){
                if(bcrypt.compareSync(password.trim(),result.password)){

                    req.session.user = {
                        id : result.id,
                        firstName : result.firstName,
                        image : result.image,
                        category : result.category,
                        email : result.email,
                        lastName : result.lastName
                    }

                    if(recordar){
                        res.cookie('userAcampada',req.session.user,{
                            maxAge : 1000 * 60
                        })
                    }

                    return res.redirect(`/`)
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
        let users = users_db.find(elemento=> elemento.id == req.params.id)
        res.render('users/profile',{
            title: "Mi perfil",
            users
        })
    },
    logout : (req,res) => {
        req.session.destroy();
        if(req.cookies.userAcampada){
            res.cookie('userAcampada','',{
                maxAge : -1
            })
        }
        res.redirect('/')
    },
    eliminar : (req,res) => {
        users_db.forEach(user => {
            if(user.id === Number(req.params.id)){
                if(fs.existsSync(path.join('public','images',user.image))){
                    fs.unlinkSync(path.join('public','images',user.image))
                }
                aEliminar = users_db.indexOf(user);
                users_db.splice(aEliminar,1)
            }
        });
        fs.writeFileSync('./data/users.json',JSON.stringify(users_db,null,2));
        res.redirect('/');
    },
}