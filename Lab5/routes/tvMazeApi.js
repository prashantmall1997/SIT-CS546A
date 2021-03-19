const express = require("express");
const router = express.Router();
const data = require("../data");
const tvMazeApiData = data.tvMazeApi;

router.get("/shows", async (req, res) => {
  try {
    const shows = await tvMazeApiData.getTvMazeData();
    res.send(shows); //send or json?
  } catch (e) {
    res.status(404).json({ message: "Cannot retrive data" });
  }
});

router.get("/shows/:id", async (req, res) => {
  if (req.params.id.trim() === "") {
    res.status(404).json({
      message: "ID cannot be empty",
    });
    return;
  }
  if (isNaN(req.params.id * 1)) {
    res.status(404).json({
      message: "ID must be a positive whole number, not letters or symbols",
    });
    return;
  }
  if (req.params.id * 1 <= 0) {
    res.status(404).json({
      message: "ID must be a positive whole number, not zero or negative",
    });
    return;
  }
  if ((req.params.id * 1) % 1 > 0) {
    res.status(404).json({
      message: "ID must be a positive whole number, not decimals",
    });
    return;
  }
  try {
    const show = await tvMazeApiData.getTvMazeShow(req.params.id);
    res.json(show);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
});

router.get("/aboutme", async (req, res) => {
  try {
    res.json({
      name: "Prashant Pramodkumar Mall",
      cwid: "10459371",
      biography:
        "Hey! My name is Prashant. I am a new international student in the USA. This is my first semester at Stevens (CS Major) I have done my undergrad in Computer Science & Engineering from Symbiosis Institute of Technology, India. \n As for the industry experience, I have worked as an intern for a startup company as a blackened developer. I hope to work as a web developer/software engineer after I graduate from Stevens.",
      favoriteShows: ["Friends", "Breaking Bad"],
    });
  } catch (e) {
    res.status(404).json({ message: "About data not found" });
  }
});

module.exports = router;
