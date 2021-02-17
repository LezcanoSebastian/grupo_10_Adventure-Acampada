const fs = require('fs');
const path = require('path');
const productsFile = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFile, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controllers = {
    list: (req, res) => {
		res.render('lista',{
            title: 'Todos los productos',
			products,
			toThousand
		})
    },
    detail : (req, res) => {
        let product = products.find(product =>{
			return product.id === +req.params.productId
		})
        res.render('detalleProducto', {
            title: 'Detalle',
            product,
            toThousand
        })
    },
    carrito : (req, res) => {
        res.render('carrito', {
            title: 'Mi Carrito'
        })
    },
    form : (req, res) => {
        res.render('formProducto', {
            title: 'Formulario de carga de producto'
        })
    }
}
module.exports = controllers;