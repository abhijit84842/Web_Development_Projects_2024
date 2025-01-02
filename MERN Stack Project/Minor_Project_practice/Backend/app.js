const express = require('express')
const path = require('path')

const app = express()

// to read the json data
app.use(express.json())

// to read the form data
app.use(express.urlencoded({extended:true}))

// static file
app.use(express.static(path.join(__dirname , "public")))

app.get("/" , (req,res)=>{
    res.send("hi")
})

app.listen(3000 , ()=>{
    console.log("PORT => "+ 3000)
})