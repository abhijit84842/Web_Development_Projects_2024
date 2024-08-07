//importing multer ES5
const multer = require("multer");

// const crypto = require("crypto");
// const path = require("path");

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./public/images/upload"); // save the file destination
//   },
//   filename: function (req, file, cb) {
//     // use crypto to set unic file name
//     crypto.randomBytes(12, (err, bytes) => {
//       // console.log(bytes)            //get the buffer 12 digit buffer output
//       const filename = bytes.toString("hex") + path.extname(file.originalname); // convert in string and set the extention

//       cb(null, filename); // save the file name
//     });
//   },
// });

// const upload = multer({ storage: storage });

// module.exports=upload

// store data in Memory..
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })   // upload bydefault in memory


module.exports=upload