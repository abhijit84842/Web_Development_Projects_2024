const {default:mongoose} = require("mongoose")
const OwnerSchema =mongoose.Schema({
    name:String,
    age:String,
    email:String,
    password:String
})

module.exports = mongoose.model("owner", OwnerSchema)