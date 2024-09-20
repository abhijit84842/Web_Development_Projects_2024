const express = require("express");
const path = require("path");

const cors = require("cors");
const { default: mongoose } = require("mongoose");
const bcrypt = require("bcrypt")
const JWT = require("jsonwebtoken")
const cookieParser = require("cookie-parser")

// Model import
const FoodModel = require("../Backend/models/foodModel")
const OwnerModel = require("../Backend/models/ownerModel")

const app = express();

const URL=  "mongodb+srv://foodPlaza:admin@cluster0.l4vqt9f.mongodb.net/Food_Plaza_App_Using_React?retryWrites=true&w=majority&appName=Cluster0"

//json data
app.use(express.json())

// url data
app.use(express.urlencoded({extended:true}))

// for static file
app.use(express.static(path.join(__dirname, "public")));

// Enable CORS for all routes
app.use(cors());

// Use cookie-parser to access and parse cookies in requests
app.use(cookieParser())


// Routing API

app.get("/api/fooddata", (req, res) => {});


// POST API for create Owner AC
app.post("/api/owner/createac" , async(req,res)=>{
  // console.log(req.body)

let {name , age , email , password } = req.body
try{
  await mongoose.connect(URL)
  // console.log("connected")
  let owner = await OwnerModel.find()
  
  if(owner.length > 0){
    res.status(400).json({msg:"owner already exists" , success:false})
  }
  else{
    bcrypt.genSalt(10,  function(err, salt) {
      bcrypt.hash(password, salt, async function(err, hash) {
          // Store hash in your password DB.
          try{
            await mongoose.connect(URL)
            let result = await OwnerModel.create({
              name,
              age,
              email,
              password:hash
            })

            res.status(200).json({ result, success:true})
          }catch(err){
            console.log(err.message)
          }
      });
  });
  }


}catch(err){
  console.log(err.message)
}

  
})


// POST API FOR ADD FOODS
app.post("/api/addfood", async(req, res) => {
//   console.log(req.body);
  let data = req.body

try{
    await mongoose.connect(URL)
    // console.log("DB connected successfully..")
    let result = await FoodModel.create(data) 
    res.send("data added successfully")

}catch(err){
    console.log(err.message)
}
});


// POST login

app.post("/api/login" ,async (req, res)=>{
    // console.log(req.body)
    let {email , password} = req.body
    try{
      await mongoose.connect(URL)
      let owner = await OwnerModel.findOne({email})
      if(!owner){
        res.status(401).json({msg:"Owner does not exists.." , success:false})
      }else{
        // compare the password
        bcrypt.compare(password, owner.password, function(err, result) {
          // result == true
          if(result == false){
            res.status(401).json({msg:"incorrect password" , success: false})
          }else{
            // JWT Token set
              let token =JWT.sign({email: owner.email , id: owner._id} ,"secrect" , {expiresIn: '4h'})
              console.log(token)
              // set cookie
              res.cookie("key" , token ,{
                // httpOnly:false ,    // Ensures the cookie is only accessible by the server
                secure:true,          // Set to true if using HTTPS
                sameSite:'Strict'         // Prevents CSRF attacks
              })
              res.status(302).json({msg:"successfully login"  , success:true})
          }
      });
      }
    }catch(err){
      console.log(err.message)
    }

})



app.listen(3000, () => {
  console.log(`Port number is => 3000`);
});
