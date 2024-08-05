const JWT =require('jsonwebtoken')

// USER Token generate and export
const usergeneratedToken=(user)=>{
    return JWT.sign({email: user.email , id: user._id} , process.env.JWT_KEY_USER)      // return jwt token 
}

module.exports=usergeneratedToken