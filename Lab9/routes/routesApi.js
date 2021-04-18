const express = require("express");
const router = express.Router();

const path = require("path");

// GET http://localhost:3000/
router.get("/", async (req, res) => {
  try {
    res.sendFile(path.resolve("static/homepage.html"));
  } catch (e) {
    res.status(500).json({ message: e });
  }
});

module.exports = router;
