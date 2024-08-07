const jwt = require("jsonwebtoken");

const adminIsLoggedIn = function (req, res, next) {
  // console.log(req.cookies)
  try{
    if (req.cookies.atoken === "") {
      req.flash("error", "You need to login first...")
      return res.redirect("/owners");
    }
    let cookiedata = jwt.verify(req.cookies.atoken, process.env.JWT_KEY_OWNER);
    // console.log(cookiedata)
    req.user1 = cookiedata;
    next();
  }catch(err){
    req.flash("error" , "something went wrong..")
  }
  
};

module.exports = adminIsLoggedIn;
