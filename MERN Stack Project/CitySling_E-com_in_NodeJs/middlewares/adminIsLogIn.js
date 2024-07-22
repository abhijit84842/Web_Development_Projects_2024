const jwt= require("jsonwebtoken")

const adminIsLoggedIn =function(req,res,next){
    // console.log(req.cookies.token)
    if(req.cookies.token ===""){
        return res.redirect("/login/adminlogin")
    }
    let cookiedata= jwt.verify(req.cookies.token , "secrect")
    console.log(cookiedata)
    req.user1=cookiedata
    next()
}

module.exports = adminIsLoggedIn