const jwt= require("jsonwebtoken")

const isLoggedIn =function(req,res,next){
    // console.log(req.cookies.utoken)
    if(req.cookies.utoken ===""){
        return res.redirect("/login")
    }
    let cookiedata= jwt.verify(req.cookies.utoken , "secrect")
    // console.log(cookiedata)
    req.user1=cookiedata
    next()
}

module.exports = isLoggedIn


/// USER LOGIN OR NOT CHECK MIDDLEWARE