const isLoggedIn = function(req , res, next){
    console.log(req.cookies.token)
    next()
}


module.exports = isLoggedIn