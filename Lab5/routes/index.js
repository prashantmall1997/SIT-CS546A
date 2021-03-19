const tvMazeApiRoutes = require("./tvMazeApi");

const constructorMethod = (app) => {
  app.use("/", tvMazeApiRoutes);

  app.use("*", (req, res) => {
    res.status(404).json({ error: "Not found" });
  });
};

module.exports = constructorMethod;
