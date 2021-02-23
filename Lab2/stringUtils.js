function camelCase(string) {
  if (string === undefined) {
    throw "Parameter is not passed!";
  }

  if (typeof string != "string") {
    throw "Parameter is not a string!";
  }

  if (string.length <= 0) {
    throw "Parameter size cannot be 0!";
  }

  if (string.trim() === "") {
    throw "String cannot be just empty spaces";
  }

  let resultArray = [];
  let result = "";
  string.trim();
  resultArray = string.split(" ");

  for (count = 0; count < resultArray.length; count++) {
    if (count === 0) {
      resultArray[count] = resultArray[count].toLowerCase();
    } else {
      word = resultArray[count];
      resultArray[count] =
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
  }

  result = resultArray.join("");

  return result;
}

function replaceChar(string) {
  if (string === undefined) {
    throw "Parameter is not passed!";
  }

  if (typeof string != "string") {
    throw "Parameter is not a string!";
  }

  if (string.length <= 0) {
    throw "Parameter size cannot be 0!";
  }

  if (string.trim() === "") {
    throw "String cannot be just empty spaces";
  }

  string.trim();
  string = string.split("");
  let firstChar = string[0];
  let replacement = "*";
  for (char = 1; char < string.length; char++) {
    if (string[char].toLowerCase() === firstChar.toLowerCase()) {
      string[char] = replacement;
      if (replacement === "*") {
        replacement = "$";
      } else {
        replacement = "*";
      }
    }
  }

  string = string.join("");
  return string;
}

function mashUp(string1, string2) {
  if (string1 === undefined || string2 === undefined) {
    throw "Parameter is not passed!";
  }

  if (typeof string1 != "string" || typeof string2 != "string") {
    throw "Parameter is not a string!";
  }

  if (string1.length <= 2 || string2.length <= 2) {
    throw "Parameter size cannot be less than 2!";
  }

  if (string1.trim() === "" || string2.trim() === "") {
    throw "String cannot be just empty spaces";
  }

  string1 = string1.trim();
  string2 = string2.trim();

  string1 = string1.split("");
  string2 = string2.split("");

  firstStr1Char = string1[0];
  secondStr1Char = string1[1];
  firstStr2Char = string2[0];
  secondStr2Char = string2[1];

  string1[0] = firstStr2Char;
  string2[0] = firstStr1Char;

  string1[1] = secondStr2Char;
  string2[1] = secondStr1Char;

  string1 = string1.join("");
  string2 = string2.join("");

  let result = string1 + " " + string2;

  return result;
}

module.exports = { camelCase, replaceChar, mashUp };
