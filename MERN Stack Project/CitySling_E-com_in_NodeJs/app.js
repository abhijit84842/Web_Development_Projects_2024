const express = require("express")
const path = require("path")

const db= require("./config/mongoose-connection")

const app = express()

// to read the json data
app.use(express.json())

// to read the form data
app.use(express.urlencoded({extended:true}))

// static file
app.use(express.static(path.join(__dirname , "public")))

// setup view engine for EJS 
app.set("view engine" , "ejs")

app.get("/", (req,res)=>{
    res.send("server is running..")
})


app.listen(3000 , ()=>{
    console.log("PORT => "+ 3000)
})