const express = require('express')
const path = require('path')
const cors = require('cors')

const app = express()

// to read the json data
app.use(express.json())

// to read the form data
app.use(express.urlencoded({extended:true}))

// static file
app.use(express.static(path.join(__dirname , "public")))

// cors origin setup
app.use(cors())


// import route
const adminRoutes= require("./routes/adminRoutes")
const usersRoute= require("./routes/usersRoutes")


// route setup
app.use("/admin" , adminRoutes)
app.use("/users" , usersRoute)


app.listen(3000 , ()=>{
    console.log("PORT => "+ 3000)
})