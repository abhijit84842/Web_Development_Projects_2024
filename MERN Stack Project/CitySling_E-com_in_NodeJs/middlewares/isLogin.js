const jwt= require("jsonwebtoken")

const isLoggedIn =function(req,res,next){
    // console.log(req.cookies.utoken)
    try{
        if(req.cookies.utoken ===""){
            return res.redirect("/login")
        }
        let cookiedata= jwt.verify(req.cookies.utoken , process.env.JWT_KEY_USER)
        // console.log(cookiedata)
        req.user1=cookiedata
        next()
    }catch(err){
        req.flash("error" , "something went wrong....")
    }
    
}

module.exports = isLoggedIn


/// USER LOGIN OR NOT CHECK MIDDLEWARE