const jwt= require("jsonwebtoken")

const isLoggedIn =function(req,res,next){
    // console.log(req.cookies.token)
    if(req.cookies.token ===""){
        return res.redirect("/login")
    }
    let cookiedata= jwt.verify(req.cookies.token , "secrect")
    console.log(cookiedata)
    req.user1=cookiedata
    next()
}

module.exports = isLoggedIn