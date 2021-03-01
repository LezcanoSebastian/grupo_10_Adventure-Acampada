module.exports = (req,res,next) => {
    if(req.session.user && req.body.category == 'admin'){
        next()
    }else{
        res.redirect('/')
    }
}