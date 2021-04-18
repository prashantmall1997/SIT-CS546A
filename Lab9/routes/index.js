const routesApi = require("./routesApi");

const constructorMethod = (app) => {
  app.use("/", routesApi);

  app.use("*", (req, res) => {
    res.status(404).json({ error: "Not found" });
  });
};

module.exports = constructorMethod;
