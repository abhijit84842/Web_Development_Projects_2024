//********************************************** login Auth Controler ************************************************//

const bcrypt = require("bcrypt");


//importing Generate Token method
const GenerateToken = require('../utils/generateToken')


// Model require
const UserModel = require("../models/userModel");
const OwnerModel=require("../models/ownerModel")


// User Login Controller....
module.exports.userLogin = async function(req, res){
  let { email, password } = req.body;

  // user loging Authentication check..
  let user = await UserModel.findOne({ email: email });
  if (!user) {
    
    req.flash("userLoginFaild" ,"Some thing went wrong , plz try again..")

    return res.status(401).redirect("/login");
  } else {
    // compare with DB stored password...
    bcrypt.compare(password, user.password, function (err, result) {
      if (result == false) {

        req.flash("userLoginFaild" ,"Incorrect password , plz check..")

        return res.status(401).redirect("/login");
      } else {
        // set cookie by JWT
        let token = GenerateToken(user);
        res.cookie("utoken", token);

        // flash msg
        req.flash("userLoginSuccess" ,"You are Successfully login....")

        res.status(200).redirect("/");
      }
    });
  }
};



// Admin/Owner Login Controller....
module.exports.ownerLogin =  async function(req, res){
    let { email, password } = req.body;
    let owner = await OwnerModel.findOne({ email: email });
    if (!owner) {

      // flash msg
      req.flash("error" , "Your account not found...")

      return res.status(401).redirect("/login/adminlogin");
    } else {
      bcrypt.compare(password, owner.password, function (err, result) {
        // result == true
        if (result == false) {

          req.flash("error", "Incorrect password ,plz check...")

          return res.status(401).redirect("/login/adminlogin");
        } else {
          // set JWT TOKEN...
          let token = GenerateToken(owner)
          res.cookie("atoken", token);

          req.flash("AdminSuccessMsg" , "You are successfully login...")

          res.redirect("/owners");
        }
      });
    }
  }

