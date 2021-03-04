const axios = require("axios").default;

async function getPeople() {
  const { data } = await axios.get(
    "https://gist.githubusercontent.com/graffixnyc/31e9ef8b7d7caa742f56dc5f5649a57f/raw/43356c676c2cdc81f81ca77b2b7f7c5105b53d7f/people.json"
  );
  //   const parsedData = JSON.parse(data); // parse the data from JSON into a normal JS Object
  //   return parsedData; // this will be the array of people objects
  return data;
}

async function getPersonById(id) {
  if (id === undefined) {
    throw "No ID was passed.";
  }
  if (typeof id !== "number") {
    throw "Passed ID is not a number.";
  }
  if (id % 1 !== 0) {
    throw "Passed ID cannot be a decimal value.";
  }

  let parseData = await getPeople();
  if (id > parseData.length) {
    throw "The passed ID is out of bound of data recorded.";
  }

  for (let counter = 0; counter < parseData.length; counter++) {
    if (parseData[counter].id === id) {
      return parseData[counter];
    }
  }
}

async function howManyPerState(stateAbbrv) {
  if (stateAbbrv === undefined) {
    throw "No state name was passed.";
  }
  if (typeof stateAbbrv !== "string") {
    throw "Passed parameter is not a string.";
  }

  let parseData = await getPeople();
  var result = 0;

  for (let counter = 0; counter < parseData.length; counter++) {
    if (parseData[counter].address.state === stateAbbrv) {
      result++;
    }
  }

  if (result === 0) {
    throw "No people in the given state or state name wrong.";
  } else {
    return result;
  }
}

async function personByAge(index) {
  if (index === undefined) {
    throw "No index was passed.";
  }
  if (typeof index !== "number") {
    throw "Passed index is not a number.";
  }
  if (index % 1 !== 0 || index < 1) {
    throw "Passed ID cannot be a decimal/zero/negative value.";
  }

  let parseData = await getPeople();

  parseData.sort((a, b) => {
    return Date.parse(a.date_of_birth) > Date.parse(b.date_of_birth) ? 1 : -1;
  });

  var birth = new Date(Date.parse(parseData[index].date_of_birth));
  var today = new Date();
  var ageTime = today.getTime() - birth.getTime();
  var ageYears = Math.floor(ageTime / (1000 * 60 * 60 * 24) / 365);

  var result = {
    first_name: parseData[index].first_name,
    last_name: parseData[index].last_name,
    date_of_birth: parseData[index].date_of_birth,
    age: ageYears,
  };
  return result;
}

async function peopleMetrics() {
  let parseData = await getPeople();
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  var longestNameLength = 0;
  var shortestNameLength = 0;
  var mostRepeatingCity = {};
  var mostRepeatingCityCount = 0;
  var ageSum = 0;
  var totalLetters = "";
  var result = {
    totalLetters: 0,
    totalVowels: 0,
    totalConsonants: 0,
    longestName: "",
    shortestName: "",
    mostRepeatingCity: "",
    averageAge: 0,
  };

  for (let counter = 0; counter < parseData.length; counter++) {
    // result.totalLetters =
    //   result.totalLetters +
    //   parseData[counter].first_name.length +
    //   parseData[counter].last_name.length;

    totalLetters =
      totalLetters +
      parseData[counter].first_name +
      parseData[counter].last_name;

    let fullName = parseData[counter].first_name + parseData[counter].last_name;
    for (let char = 0; char < fullName.length; char++) {
      if (vowels.includes(fullName[char])) {
        result.totalVowels = result.totalVowels + 1;
      }
    }

    if (fullName.length > longestNameLength) {
      // console.log(fullName.length + " " + longestNameLength);
      longestNameLength = fullName.length;
      result.longestName =
        parseData[counter].first_name + " " + parseData[counter].last_name;
    }

    if (counter === 0) {
      shortestNameLength = fullName.length;
    }
    if (fullName.length < shortestNameLength) {
      // console.log(fullName.length + " " + longestNameLength);
      shortestNameLength = fullName.length;
      result.shortestName =
        parseData[counter].first_name + " " + parseData[counter].last_name;
    }

    if (parseData[counter].address.city in mostRepeatingCity) {
      mostRepeatingCity[parseData[counter].address.city] =
        mostRepeatingCity[parseData[counter].address.city] + 1;
    } else {
      mostRepeatingCity[parseData[counter].address.city] = 1;
    }
    if (
      mostRepeatingCity[parseData[counter].address.city] >
      mostRepeatingCityCount
    ) {
      mostRepeatingCityCount =
        mostRepeatingCity[parseData[counter].address.city];
      result.mostRepeatingCity = parseData[counter].address.city;
    }

    var birth = new Date(Date.parse(parseData[counter].date_of_birth));
    var today = new Date();
    var ageTime = today.getTime() - birth.getTime();
    var ageYears = Math.floor(ageTime / (1000 * 60 * 60 * 24) / 365);
    ageSum = ageSum + ageYears;
  }

  totalLetters = totalLetters.replace(/[^a-zA-Z]/g, "");
  // console.log(totalLetters);
  result.totalLetters = totalLetters.length;
  result.totalConsonants = result.totalLetters - result.totalVowels;
  result.averageAge = ageSum / parseData.length;

  return result;
}

module.exports = {
  getPersonById,
  howManyPerState,
  personByAge,
  peopleMetrics,
};
