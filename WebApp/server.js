const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");
const predict = require("./routes/api/predict");
const app = express();
const atob = require("atob");

const fs = require("fs");

const uploadpath = "./uploads/";

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require("./config/passport")(passport);

// Use Routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);
app.use("/api/predict", predict);

// expand limit for payload to roughly 50mb
app.use(bodyParser.json({ limit: 5000000000 }));
app.use(bodyParser.urlencoded({ limit: 5000000000, extended: true }));

// @route   Post api/upload/
// @desc    Save the picture in server's folder
// @access  Public
app.post("/api/upload", (req, res) => {
  const pic = req.body.pic;
  const filename = req.body.name;

  if (filename && pic) {
    // Convert from URL to binary data
    const base64Image = pic.split("data:image/jpeg;base64,")[1];
    const binaryImg = atob(base64Image);
    const length = binaryImg.length;
    var ab = new ArrayBuffer(length);
    var ua = new Uint8Array(ab);
    for (var i = 0; i < length; i++) {
      ua[i] = binaryImg.charCodeAt(i);
    }
    //console.log(req.body.name);
    fs.writeFile(uploadpath + filename, ua, err => {});
    res.json({ path: uploadpath + filename });
  }
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
