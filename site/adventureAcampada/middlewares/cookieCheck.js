module.exports = (req,res,next) => {
    if(req.cookies.userAcampada){
        req.session.user = req.cookies.userAcampada
    }
    next()
}