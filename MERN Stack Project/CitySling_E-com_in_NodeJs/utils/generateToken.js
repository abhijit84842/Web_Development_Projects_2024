const JWT = require('jsonwebtoken')

const generateToken=(person)=>{
    console.log(person)
    if(person.usertype ==="user"){
        return JWT.sign({email:person.email, id:person._id} , process.env.JWT_KEY_USER)
    }else if(person.usertype === "owner"){
        return JWT.sign({email:person.email, id:person._id} , process.env.JWT_KEY_OWNER)
    }
    return console.log("Token not set...")
}

module.exports= generateToken