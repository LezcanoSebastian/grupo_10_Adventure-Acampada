 module.exports =  (req, res, next) =>{
        if(req.query.user == '?') {
            next(); 
        }else{
            res.redirect('/')
        }
       
    }