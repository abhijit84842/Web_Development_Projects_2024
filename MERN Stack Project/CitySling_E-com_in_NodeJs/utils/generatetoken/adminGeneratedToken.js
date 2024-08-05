const JWT= require('jsonwebtoken')

// Admin/Owner Token generate and export

const ownerGeneratedToken=(owner)=>{
    return JWT.sign({email: owner.email , id: owner._id}, process.env.JWT_KEY_OWNER)
}

module.exports=ownerGeneratedToken