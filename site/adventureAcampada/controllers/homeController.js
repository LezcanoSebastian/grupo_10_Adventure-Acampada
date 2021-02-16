const controllers = {
    home : (req, res) => {
        res.render('index', {
            title: 'Home'
        })
    },
}

module.exports = controllers;