const weather = true;

const date = new Promise((resolve, reject) => {
  if (weather) {
    const dateDetails = {
      name: "Cubana Restueant",
      location: "55th Street",
      table: 5,
    };
    resolve(dateDetails);
  } else {
    reject("Bad weather so no date");
  }
});

date
  .then((details) => {
    console.log(details);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("After date prtromise was called");
