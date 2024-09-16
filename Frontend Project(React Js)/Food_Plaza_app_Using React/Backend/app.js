const express = require('express')

const FoodData = require("../Backend/lib/dummydata")

const app = express()



app.get("/", (req,res)=>{
    res.send("food plaza server")
})

app.get("/fooddata" ,(req,res)=>{
    res.send(FoodData)
})

app.listen(3000 , ()=>{
    console.log(`Port number is => 3000`)
})