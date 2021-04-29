const express = require("express");
const app = express();
const session = require("express-session");
const static = express.static(__dirname + "/public");
const path = require("path");
const cookieParser = require("cookie-parser");
app.use(cookieParser());
const exphbs = require("express-handlebars");

const configRoutes = require("./routes");
app.use("/public", static);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine("handlebars", exphbs({ defaultLayout: null }));
app.set("view engine", "handlebars");

app.use(
  session({
    name: "lab10_session",
    secret: "keyboard cat",
    saveUninitialized: true,
    resave: false,
    cookie: { maxAge: 60000 },
  })
);

app.use("/private", (req, res, next) => {
  if (!req.cookies.AuthCookie) {
    return res.status(403).render("forbiddenAccess");
  } else {
    next();
  }
});

app.use("/logout", (req, res, next) => {
  if (!req.cookies.AuthCookie) {
    return res.redirect("/");
  } else {
    next();
  }
});

app.use("/login", (req, res, next) => {
  if (req.cookies.AuthCookie) {
    return res.redirect("/private");
  } else {
    req.method = "POST";
    next();
  }
});

app.use(async (req, res, next) => {
  var currentTimestamp = new Date().toUTCString();
  var requestMethod = req.method;
  var requestRoute = req.originalUrl;
  var isLoggedIn = req.cookies.AuthCookie
    ? "(Authenticated User)"
    : "(Non-Authenticated User)";

  console.log(
    `[${currentTimestamp}]: ${requestMethod} ${requestRoute} ${isLoggedIn}`
  );
  next();
});

configRoutes(app);

app.listen(3000, () => {
  console.log("We've now got a server!");
  console.log("Your routes will be running on http://localhost:3000");
});
