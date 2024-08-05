//********************************************** login Auth Controler ************************************************//

const bcrypt = require("bcrypt");


//importing Generate Token method
const GenerateToken = require('../utils/generateToken')


// Model require
const UserModel = require("../models/userModel");


// User Login Controller....
const userLogin = async(req, res)=>{
  let { email, password } = req.body;

  // user loging Authentication check..
  let user = await UserModel.findOne({ email: email });
  if (!user) {
    return res.status(401).send("incorrect email id...");
  } else {
    // compare with DB stored password...
    bcrypt.compare(password, user.password, function (err, result) {
      if (result == false) {
        return res.status(401).send("incorrect password..");
      } else {
        // set cookie by JWT
        let token = GenerateToken(user);
        res.cookie("utoken", token);

        res.status(200).redirect("/");
      }
    });
  }
};
module.exports=userLogin


