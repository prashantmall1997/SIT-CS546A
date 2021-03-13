// async function peopleMetrics() {
//   let peopleData = await getPeople();
//   let fullName = [];
//   let totalLetters = 0;
//   let totalVowels = 0;
//   let totalConsonants = 0;
//   let maxLength = 0;
//   let longestName = " ";
//   let minLength = 99999;
//   let sortestName = " ";
//   let mostRepeatingCity = [];

//   let cityName = {};

//   for (let i = 0; i < peopleData.length; i++) {
//     let fName = peopleData[i].first_name + peopleData[i].last_name;
//     fullName.push(fName);
//   }
//   console.log(fullName);
//   for (let i = 0; i < fullName.length; i++) {
//     let sum = fullName[i].length;
//     totalLetters = totalLetters + sum;
//     {
//       if (sum > maxLength) {
//         maxLength = sum;
//         longestName = peopleData[i].first_name + " " + peopleData[i].last_name;
//       }

//       if (sum < minLength) {
//         minLength = sum;
//         sortestName = peopleData[i].first_name + " " + peopleData[i].last_name;
//       }
//     }
//   }

//   for (let i = 0; i < fullName.length; i++) {
//     let a = fullName[i];
//     let b = a.split("");
//     for (var x in b) {
//       if (
//         b[x] == "a" ||
//         b[x] == "e" ||
//         b[x] == "i" ||
//         b[x] == "o" ||
//         b[x] == "u" ||
//         b[x] == "A" ||
//         b[x] == "E" ||
//         b[x] == "I" ||
//         b[x] == "O" ||
//         b[x] == "U"
//       ) {
//         totalVowels = totalVowels + 1;
//       } else {
//         totalConsonants = totalConsonants + 1;
//       }
//     }
//   }

//   result = {
//     totalLetters,
//     totalVowels,
//     totalConsonants,
//     longestName,
//   };

//   return result;
// }

// // Smallest name
// // Most repeating city
// // AverageAge

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  function hasDuplicates(array) {
    var valuesSoFar = Object.create(null);
    for (var i = 0; i < array.length; ++i) {
      var value = array[i];
      if (value in valuesSoFar) {
        return true;
      }
      valuesSoFar[value] = true;
    }
    return false;
  }

  let subArray = [];
  for (let startLetter = 0; startLetter < s.length; startLetter++) {
    for (let endLetter = 0; endLetter < s.length; endLetter++) {
      let subString = s.slice(startLetter, endLetter);
      if (subString != "") {
        if (!hasDuplicates(subString.split(""))) {
          subArray.push(subString);
        }
      }
    }
  }

  for (let i = 0; i < subArray.length; i++) {
    if (subArray[i] === s[0] || subArray[i] === s[s.length - 1]) {
      subArray.splice(i, 1);
    }
  }

  // console.log(subArray);
  if (subArray.length != 0) {
    var longest = subArray.reduce(function (a, b) {
      return a.length > b.length ? a : b;
    });
  } else {
    return 0;
  }

  console.log(longest);
  return longest.length;
};

lengthOfLongestSubstring("pwwkew");
