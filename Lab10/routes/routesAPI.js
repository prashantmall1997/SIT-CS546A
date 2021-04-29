const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const users = require("./../data/users");

// GET http://localhost:3000/
router.get("/", async (req, res) => {
  try {
    if (req.cookies.AuthCookie) {
      return res.redirect("/private");
    } else {
      return res.render("userLogin");
    }
  } catch (e) {
    res.status(400).json({ message: e });
  }
});

//POST /login
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      res.status(401).render("userLogin", {
        error: "Username & Password must be provided!",
      });
      return;
    }

    for (var userID = 0; userID < users.length; userID++) {
      if (users[userID].username === username) {
        var user = users[userID];
      }
    }

    if (!user) {
      res.status(401).render("userLogin", {
        error: "Username or Password is wrong!",
      });
      return;
    }

    if (!user.hashedPassword) {
      throw "Contact Admin: Data Error.";
    }

    let match = await bcrypt.compare(password, user.hashedPassword);

    if (match) {
      res.cookie("AuthCookie", { user: user });

      res.redirect("/private");
    } else {
      res.status(401).render("userLogin", {
        error: "Username or Password is wrong!",
      });
    }
  } catch (e) {
    res.status(400).json({ message: e });
  }
});

router.get("/private", async (req, res) => {
  var user = req.cookies.AuthCookie;
  res.status(200).render("private", {
    user: user.user,
  });
});

router.get("/logout", async (req, res) => {
  res.clearCookie("AuthCookie");
  req.session.destroy();
  res.status(200).render("logout");
});

module.exports = router;
