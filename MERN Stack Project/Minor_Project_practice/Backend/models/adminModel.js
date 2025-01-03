const {default:mongoose}=require('mongoose')
const adminSchema= mongoose.Schema({
    name:String,
    email:String,
    password:String,
    phno:Number,
    image:{
        type:Buffer,
    }

})

module.exports = mongoose.model("owner", adminSchema)