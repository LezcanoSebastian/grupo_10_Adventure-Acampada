const fs = require('fs');
const path = require('path');
const productsFile = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFile, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = {
    index: (req,res) => {
        res.render('admin/index');

    },
    carsList : (req,res) => {
        res.render('admin/carsList',{
            products
        });
    },
    carsCreate : (req,res) => {
        res.render('admin/carsCreate');

    },
    carsStore : (req,res) => {
        //res.send(req.body);
        let lastID = 1;
        autos.forEach(auto => {
            if(auto.id > lastID){
                lastID = auto.id
            }
        });
        const {marca,modelo,color,anio,img}=req.body;
        const auto = {
            id: Number(lastID +1),
            marca,
            modelo,
            color,
            anio,
            img
        }
        autos.push(auto);
        fs.writeFileSync('./data/autos.json',JSON.stringify(autos),'utf-8');
        res.redirect('/admin/autos/list');

    },
    carsEdit : (req,res) => {
        const auto = autos.find(auto => auto.id === +req.params.id);

        res.render('admin/carsEdit',{
            auto
        });

    },
    carsUpdate : (req,res) => {
        //res.send(req.body);
        const {marca,modelo,color,anio,img}=req.body;

        autos.forEach(auto => {
            if(auto.id === +req.params.id){
                auto.id = Number(req.params.id);
                auto.marca = marca;
                auto.modelo = modelo;
                auto.anio = anio;
                auto.color = color;
                auto.img = img
            }   
        });
        fs.writeFileSync('./data/autos.json',JSON.stringify(autos),'utf-8');
        res.redirect('/admin/autos/list');
    },
    carsDelete : (req,res) => {
        //res.send(req.params);
        autos.forEach(auto => {
            if(auto.id === +req.params.id){
                var aEliminar = autos.indexOf(auto);
                autos.splice(aEliminar,1)
            }   
        });
        fs.writeFileSync('./data/autos.json',JSON.stringify(autos),'utf-8');
        res.redirect('/admin/autos/list');
    }
}