const fs = require('fs');
const path = require('path');
const productsFile = path.join(__dirname, '../data/product.json');
const products = JSON.parse(fs.readFileSync(productsFile, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controllers = {
    home : (req, res) => {
        let recomendados = products.filter(product =>{
			return product.category=="recomendados"
		})
		let masVendidos = products.filter(product =>{
			return product.category=="mas-vendidos"
		})
        res.render('index', {
            title: 'Home',
            recomendados,
			masVendidos,
			toThousand
        })
    },
}

module.exports = controllers;