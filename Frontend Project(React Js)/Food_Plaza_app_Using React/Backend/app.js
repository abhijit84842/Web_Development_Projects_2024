const express = require("express");
const path = require("path");

const cors = require("cors");
const { default: mongoose } = require("mongoose");

const FoodModel = require("../Backend/models/foodModel")

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
    console.log(req.body)
})



app.listen(3000, () => {
  console.log(`Port number is => 3000`);
});
