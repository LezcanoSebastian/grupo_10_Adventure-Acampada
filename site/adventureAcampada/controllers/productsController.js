
const controllers = {
    detail : (req, res) => {
        res.render('detalleProducto', {
            title: 'Detalle'
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