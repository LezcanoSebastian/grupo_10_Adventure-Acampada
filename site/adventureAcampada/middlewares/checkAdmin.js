
module.exports = (req,res,next) => {
    if(req.query.category === 'admin' && req.query.email === "sebastian.e.lezcano@gmail.com"
    ){
        next()
    }else{
        res.redirect('/')
    }
}