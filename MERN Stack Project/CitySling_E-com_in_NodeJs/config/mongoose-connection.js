// Connect with MongoDB 

const { default: mongoose } = require("mongoose");

const url= "mongodb+srv://CitySlingAdmin:Admin123@cluster0.l4vqt9f.mongodb.net/CitySling-E-com-Web?retryWrites=true&w=majority&appName=Cluster0";

const DbConnection= async()=>{
    try{
        await mongoose.connect(url)
        console.log("DB Connected Successfully...")
    }catch(err){
        console.log("not connected" + err.message)
    }
}


// exports the hole database connection..
module.exports= DbConnection()          