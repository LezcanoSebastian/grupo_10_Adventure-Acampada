const path = require('path');
const fs = require('fs');

const {getProductos,setProductos} = require(path.join('..','data','product'));

const products = getProductos();


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
            image: req.files[0].filename,
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
        setProductos(products);
        //fs.writeFileSync('./data/product.json',JSON.stringify(products),'utf-8');
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
        //fs.writeFileSync('./data/product.json',JSON.stringify(products),'utf-8');
        setProductos(products);
        res.redirect('/admin/products/list');
    },
    productsDelete : (req,res) => {
        //res.send(req.params);
        products.forEach(product => {
            if(product.id === +req.params.id){
                if(fs.existsSync(path.join('public','img','product',product.image))){
                    fs.unlinkSync(path.join('public','img','product',product.image))
                }
                var aEliminar = products.indexOf(product);
                products.splice(aEliminar,1)
            }   
        });
        //fs.writeFileSync('./data/product.json',JSON.stringify(products),'utf-8');
        setProductos(products);
        res.redirect('/admin/products/list');
    }
}
