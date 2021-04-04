const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const db = require('../database/models');
const { Sequelize } = require('../database/models');

const controllers = {

    list: (req, res) => {
        db.product.findAll({
            include : {
                association : 'imagenes'
            }
            
        })
            .then(products => {
                return res.render('lista', {
                    title: 'Todos los productos',
                    products,
                    toThousand
                })
            })

    },
    detail: (req, res) => {
       let product = db.product.findByPk(req.params.productId, {
            include : {
                association : 'imagenes'
            }
        })
        let recomendaciones = db.product.findAll({
            include : {
                association : 'imagenes'
            },
            limit : 10,
		    order : Sequelize.literal('rand()'),
            
        })
        Promise.all([product,recomendaciones])
        .then(([product,recomendaciones]) =>{
            return res.render('detalleProducto', {
            title: 'Detalle',
            product,
            recomendaciones,
            toThousand
        })
        })
        
        
    },
    carrito: (req, res) => {
        res.render('carrito', {
            title: 'Mi Carrito',
            product
        })
    }

}
module.exports = controllers;