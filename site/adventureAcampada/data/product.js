const fs = require('fs');
const path = require('path');
const productos_db = path.join('data','product.json');
module.exports = {
    getProductos : () => {
        return JSON.parse(fs.readFileSync(productos_db,'utf-8'));

    },
    setProductos : (data) =>{
        fs.writeFileSync(productos_db,JSON.stringify(data,null,2),'utf-8');
    }
}
