const {validationResult} = require('express-validator');
const { Sequelize } = require('sequelize');
const db = require('../database/models');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");



module.exports = {
    title: "Administracion",
    index: (req,res) => {
        res.render('admin/indexAdmin');
    },
    productsList : (req,res) => {
     let products =  db.product.findAll({
            include : [
                { association : 'imagenes'}
            ]
            
        })
        let carrusel = db.product.findAll({
            limit : 10,
            order : Sequelize.literal('rand()'),
            include : [
                { association : 'imagenes'}
            ]
            
        })
        Promise.all([products,carrusel])
        .then(([products,carrusel]) => {
            return res.render('admin/productList',{
            products, 
            carrusel,
    
        });
        })
        
    },
    productsCreate : (req,res) => {
        db.category_product.findAll()
        .then(categorias => {
            return  res.render('admin/productCreate',{
                categorias
            })
        })
       
    },
    productsStore : (req,res) => {

        let errores = validationResult(req);
        
        if(errores.isEmpty()){
            const {name,description,price,ID_category,color,discount,mark,size,origin,material,stock,delibery}=req.body;
            db.product.create({
                name,
                description,
                price,
                ID_category ,
                color,
                discount,
                mark,
                size,
                origin,
                material,
                stock,
                delibery
            })
            .then(product =>{
                db.image_product.create({
                    image : (req.files[0]) ? req.files[0].filename : "default.jpg",
                    productId : product.id
                })
                .then(()=>{
                    res.redirect('/admin/products/list')
                })
              .catch(error => res.send(error))
            })
        }else{    
            db.category_product.findAll()
            .then(categorias =>{
                  return res.render('admin/productCreate',{
                errores : errores.mapped(),
                old: req.body, 
                categorias
                })     
                
            })
        }   
    },
    productsEdit : (req,res) => {
       let categoria =  db.category_product.findAll()
       let product = db.product.findByPk(req.params.id,{ 
        include :[
        
            {association : 'imagenes'}, {association : 'categoria'}
        ]
        }
        );
       
      Promise.all([product, categoria])
        .then(([product, categorias]) =>{
            return res.render('admin/productEdit',{
                product,
                categorias
                })
           
        })
        .catch(error => res.send(error))

        
    },
    productsUpdate : (req,res) => {
        const {name,description,price,ID_category,color,discount,mark,size,origin,material,stock,delibery, image}=req.body;
        db.product.update({
            name : name, 
            description: description, 
            price: price,
            ID_category : ID_category,
            color : color,
            discount: discount,
            mark : mark,
            size : size,
            origin : origin,
            material : material,
            stock : stock,
            delibery : delibery,
            image : image
        },
        {
            where : {
                id : req.params.id
            }
            
        })
            .then(()=> {
                const {image} = req.body
                db.image_product.update({
                    image : req.files[0].filename
                },
                {
                    where : {
                    id : req.params.id
                }
                })
                return res.redirect('/admin/products/update/'+id)
            })
            .catch(error => res.send(error))
        res.redirect('/admin/products/list')
       
    },
    productsDelete : (req,res) => {
        db.product.destroy({
            where : {
                id : req.params.id
            }
        })
        
        .then(()=>{
            db.image_product.destroy({
                
                    where : {
                    id : req.params.id
                }
                
            })
         return res.redirect('/admin/products/list')})
        .catch(error => res.send(error))
    },
    products : (req,res) => {
        let products =  db.product.findAll({
            include : [
                { association : 'imagenes'},
                {association: "categoria"}
            ]
            
        })
        Promise.all([products])
        .then(([products]) => {
            return res.render('admin/products',{
            products,
            toThousand
        });
        })
    },
    getProducts : (req,res) => {
        db.product.findAll({
            include : [
                {association : 'categoria'}
            ]
        })
        .then(productos => {
            return res.status(200).json({
                productos
            })
        })
        .catch(error => console.log(error))
    }
}
