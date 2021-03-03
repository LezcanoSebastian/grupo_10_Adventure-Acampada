module.exports = (req,res,next) => {
        if(req.session.user.category==="admin"){
        next()
    }else{
        res.send('No tienes privilegios')
}}