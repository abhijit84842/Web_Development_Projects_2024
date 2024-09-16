const express = require('express')

const cors = require('cors')

const FoodData = require("../Backend/lib/dummydata")

const app = express()

// Enable CORS for all routes
app.use(cors())



app.get("/", (req,res)=>{
    res.send("food plaza server")
})

app.get("/fooddata" ,(req,res)=>{
    res.send(FoodData)
})

app.listen(3000 , ()=>{
    console.log(`Port number is => 3000`)
})