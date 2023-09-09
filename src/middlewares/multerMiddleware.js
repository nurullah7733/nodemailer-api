const multer = require("multer");
const path = require("path");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "/tmp");
    // cb(null, path.join(__dirname, "../../public/images"));
  },
  filename: function (req, file, cb) {
    const uniquesuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniquesuffix + "-" + file.originalname);
  },
});

// const multerFilter = (req, file, cb) => {
//   if (file.mimetype.startsWith("image")) {
//     cb(null, true);
//   } else {
//     cb("Unsupported file format", false);
//     // cb(new Error("Wrong extension type"), false);
//   }
// };

const uploadPhoto = multer({
  storage: storage,
  //   fileFilter: multerFilter,
  limits: { fileSize: 2000000 },
});

module.exports = uploadPhoto;
