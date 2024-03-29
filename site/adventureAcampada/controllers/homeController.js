const { Sequelize } = require('../database/models');
const db =require ('../database/models')
const {Op} = require('sequelize');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controllers = {
    home : (req, res) => {
		let recomendados = db.product.findAll({
		limit : 4,
		order : Sequelize.literal('rand()'),
		include : [
			{association : 'imagenes'}
		]
	});
	let masVendidos = db.product.findAll({
		limit : 8,
		order : Sequelize.literal('rand()'),
		include : [
			{association : 'imagenes'}
		]
	});
	Promise.all([recomendados,masVendidos])
	.then(([recomendados,masVendidos])=> {
		return  res.render('index', {
					title: 'Adventure Acampada',
					recomendados,
					masVendidos,
					toThousand
				})
	})
	.catch(error => res.send(error));

    },
    search: (req, res) => {
		// Busqueda
		/* const result = products.filter(product =>{
			return product.name.toLowerCase().includes(req.query.keywords.toLowerCase().trim())
			El trim es para evitar errores de busqueda debido a espacios de mas
		})
		res.render('results',{
			result,
			search: req.query.keywords,
			
		})
	} */
		db.product.findAll({
			include : [
                { association : 'imagenes'}
            ],
			where : {
				name : {
					[Op.like] : `%${req.query.keywords}%`
				}
			}
		
		})
		.then(result => {
			return res.render('results',{
				result,
				search: req.query.keywords
			})
		})
		.catch(error => res.send(error))
	 }
	}

module.exports = controllers;