const express = require("express");
const router = express.Router();

const formidable = require("formidable");
const fs = require("fs");
// Predition stuffs
const path = require("path");
const { spawn } = require("child_process");

function runScript(input) {
  return spawn("python3", ["./predictor.py", input]);
}

// @route   Post api/predict/
// @desc    post a predict with a predition result
// @access  Public

router.post("/", function(req, res) {
  //console.log(req.body.path.toString());
  const subprocess = runScript(req.body.path);
  subprocess.stdout.on("data", function(data) {
    while (!res.finished) {
      res.json({ out: data.toString() });
    }
  });
});

module.exports = router;
