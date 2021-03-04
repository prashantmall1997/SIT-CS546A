async function peopleMetrics() {
  let peopleData = await getPeople();
  let fullName = [];
  let totalLetters = 0;
  let totalVowels = 0;
  let totalConsonants = 0;
  let maxLength = 0;
  let longestName = " ";
  let minLength = 99999;
  let sortestName = " ";
  let mostRepeatingCity = [];

  let cityName = {};

  for (let i = 0; i < peopleData.length; i++) {
    let fName = peopleData[i].first_name + peopleData[i].last_name;
    fullName.push(fName);
  }
  console.log(fullName);
  for (let i = 0; i < fullName.length; i++) {
    let sum = fullName[i].length;
    totalLetters = totalLetters + sum;
    {
      if (sum > maxLength) {
        maxLength = sum;
        longestName = peopleData[i].first_name + " " + peopleData[i].last_name;
      }

      if (sum < minLength) {
        minLength = sum;
        sortestName = peopleData[i].first_name + " " + peopleData[i].last_name;
      }
    }
  }

  for (let i = 0; i < fullName.length; i++) {
    let a = fullName[i];
    let b = a.split("");
    for (var x in b) {
      if (
        b[x] == "a" ||
        b[x] == "e" ||
        b[x] == "i" ||
        b[x] == "o" ||
        b[x] == "u" ||
        b[x] == "A" ||
        b[x] == "E" ||
        b[x] == "I" ||
        b[x] == "O" ||
        b[x] == "U"
      ) {
        totalVowels = totalVowels + 1;
      } else {
        totalConsonants = totalConsonants + 1;
      }
    }
  }

  result = {
    totalLetters,
    totalVowels,
    totalConsonants,
    longestName,
  };

  return result;
}

// Smallest name
// Most repeating city
// AverageAge
