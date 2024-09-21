// import jwt
const JWT = require("jsonwebtoken")

const isLoggedIn = function(req , res, next){
    // console.log(req.cookies.token)
    try{

        if(req.cookies.token ===""){
            res.json({msg:"You have to login first.." , success:false})
        }else{
            let cookieData= JWT.verify(req.cookies.token , "secrect")
            req.user1 = cookieData
            next()
        }

    }catch(err){
        console.log(err.message)
    }

  
   
}


module.exports = isLoggedIn