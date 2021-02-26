const fs = require('fs');
const path = require('path');
const productsFile = path.join(__dirname, '../data/product.json');
const products = JSON.parse(fs.readFileSync(productsFile, 'utf-8'));

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
	
        })
    },
    search: (req, res) => {
		// Busqueda
		const result = products.filter(product =>{
			return product.name.toLowerCase().includes(req.query.keywords.toLowerCase().trim())
			/* El trim es para evitar errores de busqueda debido a espacios de mas */
		})
		res.render('results',{
			result,
			search: req.query.keywords,
			
		})
	}
}

module.exports = controllers;