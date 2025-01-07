const express = require("express");

// multer upload
const upload = require("../config/multerConfiguration");
// bcrypt
const bcrypt = require("bcrypt");

const { default: mongoose } = require("mongoose");
const AdminModel = require("../models/adminModel");
const adminModel = require("../models/adminModel");
const generateToken = require("../util/generateToken");

// DB URL
const url =
  "mongodb+srv://minorProjectPractice:admin@projectcluster1.zoxj2.mongodb.net/MinorProject_For_Practice?retryWrites=true&w=majority&appName=ProjectCluster1";

const router = express.Router();

// Create Admin AC
router.post("/createac", upload.single("image"), async (req, res) => {
  // console.log(req.file.buffer)
  // console.log(req.body)
  let { name, email, password, phno } = req.body;
  try {
    await mongoose.connect(url);
    console.log("db connected successfully");
    let owner = await AdminModel.find();

    if (owner.length > 0) {
      res.status(400).json({ msg: "owner already exists", success: false });
    } else {
      bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(password, salt, async function (err, hash) {
          // Store hash in your password DB
          try {
            await mongoose.connect(url);
            let result = await AdminModel.create({
              image: req.file.buffer,
              name,
              email,
              phno,
              password: hash,
            });
            res
              .status(200)
              .json({ msg: "Account created Successfully", success: true });
          } catch (err) {
            console.log("db not connected..");
          }
        });
      });
    }
  } catch (err) {
    console.log(err.message);
  }
});

// Post request for admin login..
router.post("/adminlogin" , async(req,res)=>{
  console.log(req.body)
  let {email , password }= req.body
  try{
    await mongoose.connect(url)
    let admin = await adminModel.findOne({email:email})
    if(!admin){
      res.status(400).json({msg:"incorrect email id!" , success:false})
    }else{
      bcrypt.compare(password, admin.password, function(err, result) {
        // result == true
        if(result){
          const token =generateToken(admin)
          // console.log(token)
          res.cookie("AdminToken" , token , {
            httpOnly:false, // ensure cookie accessable by the server
            secure:true,  // set true if using http otherwish set it false
            sameSite:"none"  // Allows the cookie to be sent in cross-site requests

          })

          res.status(200).json({msg:"successfully login" , success:true})
        }else{
          res.status(400).json({msg:"incorrect password! " , success:false})
        }
    });
    }
  }catch(err){
    console.log(err.message)
  }
})

module.exports = router;

// Write router defination in this page
