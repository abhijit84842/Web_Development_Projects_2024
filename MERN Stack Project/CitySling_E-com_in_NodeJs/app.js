const express = require("express")
const path = require("path")
const cookieParser = require("cookie-parser")
const expressSession= require('express-session')
const flash= require('connect-flash')


// MongoDB config require
const db= require("./config/mongoose-connection")

// Router require
const homeRouter= require("./routes/homeRouter")
const ownersRouter = require("./routes/ownersRouter")

const usersRouter= require("./routes/usersRouter")
const productsRouter= require("./routes/productsRouter")
const loginRouter = require("./routes/loginRouter")
const logoutRouter= require("./routes/logoutRouter")
const cartRouter=require("./routes/cartRouter")

// to use dotenv
require('dotenv').config();


const app = express()

// to read the json data
app.use(express.json())

// to read the form data
app.use(express.urlencoded({extended:true}))

// static file
app.use(express.static(path.join(__dirname , "public")))

// setup view engine for EJS 
app.set("view engine" , "ejs")

// to read the cookies in console
app.use(cookieParser())

// to create session
app.use(expressSession({
    resave:false,
    saveUninitialized: false,
    secret:"sessionkey",
}))

// setup flash  -> it use the express session
app.use(flash())

// Route setup
app.use("/", homeRouter)
app.use("/owners", ownersRouter)

app.use("/users" , usersRouter)
app.use("/products", productsRouter)
app.use("/cart", cartRouter)
app.use("/login",loginRouter )
app.use("/logout",logoutRouter)



app.listen(3001 , ()=>{
    console.log("PORT => "+ 3001)
})