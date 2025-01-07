const express = require('express')
const path = require('path')
const cors = require('cors')
const cookieParser = require("cookie-parser")

// import route
const adminRoutes= require("./routes/adminRoutes")
const usersRoute= require("./routes/usersRoutes")
const productRoute = require("./routes/productRoutes")


const app = express()

// to read the json data
app.use(express.json())

// to read the form data
app.use(express.urlencoded({extended:true}))

// static file
app.use(express.static(path.join(__dirname , "public")))

// cors origin setup
// const corsOptions ={
//     origin:"" , // allow all origin
//     methods:"GET,HEAD,PUT,PATCH,POST,DELETE",
//     allowedHeaders:["Content-Type" , "Authorization"],
// }
app.use(cors({
    origin:"http://localhost:3000",
    credentials:true
}))

// to accept cookies in backend
app.use(cookieParser())


// route setup
app.use("/admin" , adminRoutes)
app.use("/users" , usersRoute)
app.use("/products", productRoute)


app.listen(3001 , ()=>{
    console.log("PORT => "+ 3001)
})