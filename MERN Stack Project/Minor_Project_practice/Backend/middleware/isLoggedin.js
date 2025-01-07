const jwt = require('jsonwebtoken')

const isLoggedin = function(req,res,next){
    // console.log(req.cookies.Atoken)
    try{
        if(req.cookies.Atoken===""){
            res.json({msg:"You are not loggedin, plz login first.."})
        }else{
            let cookieData = jwt.verify(req.cookies.Atoken , "secrectkey")
            req.admin1= cookieData
            next()
        }
    }catch(err){
        console.log(err.message)
    }
}
module.exports = isLoggedin