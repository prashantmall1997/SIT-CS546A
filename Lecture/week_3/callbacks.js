// console.log("Plant corn");
// console.log("Water plant");
// console.log("Add fertilizer");

// console.log("Plant peas");

// setTimeout(() => {
//   console.log("Water plant");
// }, 3000);

// console.log("Add  fertilizer");

// setInterval(() => {
//   console.log("Hello");
// }, 1000);

// const list = ["Man", "Women", "Child"];

// const newList = list.map((element) => {
//   return element + " kind";
// });

// newList.forEach((value) => {
//   console.log(value);
// });

function greeting(name) {
  console.log(`Hello ${name}`);
}

function introduction(firstName, lastName, callback) {
  const fullName = `${firstName} ${lastName}`;
  callback(fullName);
}

introduction("Prashant", "Mall", greeting);
