const jwt = require("jsonwebtoken")
const generateToken = (person)=>{
    if(person){
        return jwt.sign({email:person.email , _id:person._id}, "secrectkey" , {expiresIn:"2h"})
    }else{
        return console.log("token not set")
    }
}

module.exports = generateToken