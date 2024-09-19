const express = require("express");
const path = require("path");

const cors = require("cors");
const { default: mongoose } = require("mongoose");
const bcrypt = require("bcrypt")

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

app.post("/api/login" , (req, res)=>{
    // console.log(req.body)
})



app.listen(3000, () => {
  console.log(`Port number is => 3000`);
});
