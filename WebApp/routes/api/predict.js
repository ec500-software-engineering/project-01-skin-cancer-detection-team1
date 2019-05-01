const express = require("express");
const router = express.Router();

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
  if (req.body.path) {
    console.log("[Server predict]" + req.body.path);
    const subprocess = runScript(req.body.path);
    subprocess.stdout.on("data", function(data) {
      while (!res.finished) {
        res.json({ out: data.toString() });
      }
    });
  }
});

router.get("/", function(req, res) {
  console.log("[Server predict] get from predict");
});

module.exports = router;
