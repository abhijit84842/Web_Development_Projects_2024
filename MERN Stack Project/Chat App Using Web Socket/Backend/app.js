const express = require("express")
const path = require("path")
const cors = require("cors")

const app = express()

app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.use(express.static(path.join(__dirname,"public")))

// handle cors origin error
app.use(cors(
    {
        origin:"http://localhost:5173",
        credentials: true // allow creadentials (cookies) to be sent with request
    }
))

app.get("/api/name" ,(req,res)=>{
    return res.json({
        "name":"Abhijit Das",
        "address":"Chandrakona Town"
    })
})
app.listen(3000,()=>{
    console.log("Server is Running PORT=> " + 3000)
})