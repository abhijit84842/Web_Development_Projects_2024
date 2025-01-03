const {default:mongoose}=require('mongoose')
const adminSchema= mongoose.Schema({
    name:String,
    age:number,
    email:String,
    password:String,
    phno:number,
    image:{
        type:Buffer,
    }

})

module.exports = mongoose.model("owner", adminSchema)