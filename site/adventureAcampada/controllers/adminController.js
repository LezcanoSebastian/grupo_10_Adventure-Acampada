const fs = require('fs');
const products = require('../data/product.json');



/*const path = require('path');
const productsFile = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFile, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");*/

module.exports = {
    title: "Administracion",
    productsindex: (req,res) => {
        res.render('admin/indexAdmin');
    },
    productsList : (req,res) => {
        res.render('admin/productList',{
            products
        });
    },
    productsCreate : (req,res) => {
        res.render('admin/productCreate');
    },
    productsStore : (req,res) => {
        //res.send(req.body);
        let lastID = 1;
        products.forEach( product => {
            if( product.id > lastID){
                lastID =  product.id
            }
        });
        const {name,descripcion,price,image,category,colors,discount,mark,size,origin,material,stock,delivery}=req.body;
        const producto = {
            id: Number(lastID +1),
            name,
            descripcion,
            price,
            image,
            category,
            colors,
            discount,
            mark,
            size,
            origin,
            material,
            stock,
            delivery
        }
        products.push(producto);
        fs.writeFileSync('./data/product.json',JSON.stringify(products),'utf-8');
        res.redirect('/admin/products/list');

    },
    productsEdit : (req,res) => {
        const product = products.find(product => product.id === +req.params.id);

        res.render('admin/productEdit',{
            product
        });

    },
    productsUpdate : (req,res) => {
        //res.send(req.body);
        const {name,descripcion,price,image,category,colors,discount,mark,size,origin,material,stock,delivery}=req.body;

        products.forEach(product => {
            if(product.id === +req.params.id){
                product.id = Number(req.params.id);
                product.name = name;
                product.descripcion = descripcion;
                product.price = price;
                product.image = image;
                product.category = category;
                product.colors = colors;
                product.discount = discount;
                product.mark = mark;
                product.size = size;
                product.origin = origin;
                product.material = material;
                product.stock = stock;
                product.delivery = delivery
            }   
        });
        fs.writeFileSync('./data/product.json',JSON.stringify(products),'utf-8');
        res.redirect('/admin/products/list');
    },
    productsDelete : (req,res) => {
        //res.send(req.params);
        products.forEach(product => {
            if(product.id === +req.params.id){
                var aEliminar = products.indexOf(product);
                products.splice(aEliminar,1)
            }   
        });
        fs.writeFileSync('./data/product.json',JSON.stringify(products),'utf-8');
        res.redirect('/admin/products/list');
    }
}