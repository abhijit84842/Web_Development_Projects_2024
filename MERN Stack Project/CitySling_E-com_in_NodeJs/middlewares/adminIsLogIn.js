const jwt = require("jsonwebtoken");

const adminIsLoggedIn = function (req, res, next) {
  // console.log(req.cookies)
  if (req.cookies.atoken === "") {
    return res.redirect("/login/adminlogin");
  }
  let cookiedata = jwt.verify(req.cookies.atoken, process.env.JWT_KEY_OWNER);
  // console.log(cookiedata)
  req.user1 = cookiedata;
  next();
};

module.exports = adminIsLoggedIn;
