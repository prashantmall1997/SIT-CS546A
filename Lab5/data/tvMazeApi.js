const axios = require("axios").default;

async function getData() {
  const { data } = await axios.get("http://api.tvmaze.com/shows");
  return data;
}

async function getShow(id) {
  if (id === undefined) {
    throw "ID not passed";
  }
  if (id.trim() === "") {
    throw { message: "ID cannot be empty" };
  }
  if (isNaN(id * 1)) {
    throw {
      message: "ID must be a positive whole number, not letters or symbols",
    };
  }
  if (id * 1 <= 0) {
    throw {
      message: "ID must be a positive whole number, not zero or negative",
    };
  }
  if ((id * 1) % 1 > 0) {
    throw { message: "ID must be a positive whole number, not decimals" };
  }

  const { data } = await axios.get(`http://api.tvmaze.com/shows/${id}`);

  return data;
}

let exportedMethods = {
  async getTvMazeData() {
    let parseData = await getData();
    return parseData;
  },
  async getTvMazeShow(id) {
    let parseData = await getShow(id);
    return parseData;
  },
};

module.exports = exportedMethods;
