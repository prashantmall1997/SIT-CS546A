const questionOne = function questionOne(arr) {
  // Implement question 1 here
  if (arr === undefined || arr.length == 0) {
    return {};
  } else {
    let result = {};
    for (counter0 = 0; counter0 < arr.length; counter0++) {
      number = arr[counter0];
      let counter1;
      let isPrime = null;

      if (number === 2 || number === 3) {
        isPrime = true;
        result[number] = isPrime;
      } else if (number < 2) {
        isPrime = false;
        result[number] = isPrime;
      } else {
        for (counter1 = 2; counter1 <= Math.sqrt(number); counter1++) {
          if (number % counter1 === 0) {
            isPrime = false;
            break;
          } else {
            isPrime = true;
          }
        }
        result[number] = isPrime;
      }
    }
    return result;
  }
};

const questionTwo = function questionTwo(arr) {
  // Implement question 2 here
  if (arr === undefined || arr.length == 0) {
    return 0;
  } else {
    const sqr_arr = Math.sqrt(
      Math.pow(
        arr.map((x) => x * x).reduce((a, b) => a + b, 0),
        5
      )
    ).toFixed(2);
    return parseFloat(sqr_arr);
  }
};

const questionThree = function questionThree(text) {
  // Implement question 3 here
  let consonantsCount = 0;
  let vowelsCount = 0;
  let numbersCount = 0;
  let spacesCount = 0;
  let punctuationsCount = 0;
  let specialCharactersCount = 0;

  let consonants = [
    "B",
    "C",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "M",
    "N",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "V",
    "W",
    "X",
    "Z",
    "Y",
  ];
  let vowels = ["A", "E", "I", "O", "U"];
  let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let space = [" "];
  let punctuations = [
    ".",
    "?",
    "!",
    ",",
    ";",
    ":",
    "-",
    "—",
    "{",
    "}",
    "[",
    "]",
    "(",
    ")",
    "'",
    '"',
    "…",
  ];
  let specialCharacters = [
    "/",
    "|",
    "\\",
    ">",
    "<",
    "`",
    "~",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "_",
    "+",
    "=",
  ];

  let characterPosition = 0;

  for (
    characterPosition = 0;
    characterPosition < text.length;
    characterPosition++
  ) {
    if (consonants.includes(text[characterPosition].toUpperCase())) {
      consonantsCount++;
    } else if (vowels.includes(text[characterPosition].toUpperCase())) {
      vowelsCount++;
    } else if (numbers.includes(text[characterPosition].toUpperCase())) {
      numbersCount++;
    } else if (space.includes(text[characterPosition].toUpperCase())) {
      spacesCount++;
    } else if (punctuations.includes(text[characterPosition].toUpperCase())) {
      punctuationsCount++;
    } else if (
      specialCharacters.includes(text[characterPosition].toUpperCase())
    ) {
      specialCharactersCount++;
    }
  }

  result = {
    consonants: `${consonantsCount}`,
    vowels: `${vowelsCount}`,
    numbers: `${numbersCount}`,
    spaces: `${spacesCount}`,
    punctuation: `${punctuationsCount}`,
    specialCharacters: `${specialCharactersCount}`,
  };

  // console.log(consonantsCount);
  // console.log(vowelsCount);
  // console.log(numbersCount);
  // console.log(spacesCount);
  // console.log(punctuationsCount);
  // console.log(specialCharactersCount);

  return result;
};

const questionFour = function questionFour(num1, num2, num3) {
  // Implement question 4 here
  let P = num1;
  let r = (num2 * 0.01) / 12;
  let n = num3 * 12;

  A = P * ((r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
  return parseFloat(A.toFixed(2));
};

module.exports = {
  firstName: "Prashant Pramodkumar",
  lastName: "Mall",
  studentId: "10459371",
  questionOne,
  questionTwo,
  questionThree,
  questionFour,
};
