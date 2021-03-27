const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const db = require('../database/models')

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
        db.product.findByPk(req.params.productId, {
            include : {
                association : 'imagenes'
            }
        })
        .then(product =>{
            return res.render('detalleProducto', {
            title: 'Detalle',
            product,
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