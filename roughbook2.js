// function camelCase(string) {
//   if (string === undefined) {
//     throw "Parameter is not passed!";
//   }

//   if (typeof string != "string") {
//     throw "Parameter is not a string!";
//   }

//   if (string.length <= 0) {
//     throw "Parameter size cannot be 0!";
//   }

//   if (string.trim() === "") {
//     throw "String cannot be just empty spaces";
//   }

//   let resultArray = [];
//   let result = "";
//   string.trim();
//   resultArray = string.split(" ");

//   for (count = 0; count < resultArray.length; count++) {
//     if (count === 0) {
//       resultArray[count] = resultArray[count].toLowerCase();
//     } else {
//       word = resultArray[count];
//       resultArray[count] =
//         word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//     }
//   }

//   result = resultArray.join("");

//   return result;
// }

// temp = camelCase();
// console.log(temp);

// function replaceChar(string) {
//   if (string === undefined) {
//     throw "Parameter is not passed!";
//   }

//   if (typeof string != "string") {
//     throw "Parameter is not a string!";
//   }

//   if (string.length <= 0) {
//     throw "Parameter size cannot be 0!";
//   }

//   if (string.trim() === "") {
//     throw "String cannot be just empty spaces";
//   }

//   string.trim();
//   string = string.split("");
//   let firstChar = string[0];
//   let replacement = "*";
//   for (char = 1; char < string.length; char++) {
//     if (string[char].toLowerCase() === firstChar.toLowerCase()) {
//       string[char] = replacement;
//       if (replacement === "*") {
//         replacement = "$";
//       } else {
//         replacement = "*";
//       }
//     }
//   }

//   string = string.join("");
//   return string;
// }

// // temp = replaceChar("babbbbble");
// // console.log(temp);

// function mashUp(string1, string2) {
//   if (string1 === undefined || string2 === undefined) {
//     throw "Parameter is not passed!";
//   }

//   if (typeof string1 != "string" || typeof string2 != "string") {
//     throw "Parameter is not a string!";
//   }

//   if (string1.length <= 2 || string2.length <= 2) {
//     throw "Parameter size cannot be less than 2!";
//   }

//   if (string1.trim() === "" || string2.trim() === "") {
//     throw "String cannot be just empty spaces";
//   }

//   string1 = string1.trim();
//   string2 = string2.trim();

//   string1 = string1.split("");
//   string2 = string2.split("");

//   firstStr1Char = string1[0];
//   secondStr1Char = string1[1];
//   firstStr2Char = string2[0];
//   secondStr2Char = string2[1];

//   string1[0] = firstStr2Char;
//   string2[0] = firstStr1Char;

//   string1[1] = secondStr2Char;
//   string2[1] = secondStr1Char;

//   string1 = string1.join("");
//   string2 = string2.join("");

//   let result = string1 + " " + string2;

//   return result;
// }

// function makeArrays(objects) {
//   if (objects === undefined) {
//     throw "Parameter is not passed!";
//   }

//   if (!Array.isArray(objects)) {
//     throw "Parameter is not an array!";
//   }

//   if (objects.length === 0) {
//     throw "Array is empty";
//   }

//   for (count = 0; count < objects.length; count++) {
//     if (typeof objects[count] != "object") {
//       throw "All elements must be object!";
//       break;
//     }
//     if (Object.keys(objects[count]).length === 0) {
//       throw "Objects cannot be empty!";
//       break;
//     }
//     if (Object.keys(objects[count]).length < 2) {
//       throw "Objects cannot contain less than 2 elements!";
//       break;
//     }
//   }

//   let result = [];

//   for (loop = 0; loop < objects.length; loop++) {
//     for (iLoop = 0; iLoop < Object.keys(objects[loop]).length; iLoop++) {
//       key = Object.keys(objects[loop])[iLoop];
//       value = objects[loop][key];
//       result.push([key, value]);
//     }
//   }

//   return result;
// }

// const first = { x: 2, y: 3 };
// const second = { a: 70, x: 4, z: 5 };
// const third = { x: 0, y: 9, q: 10 };

// const firstSecondThird = makeArrays([first, second, third]);
// console.log(firstSecondThird);

// const secondThird = makeArrays([second, third]);
// console.log(secondThird);

// function isDeepEqual(obj1, obj2) {
//   if (obj1 === undefined || obj2 === undefined) {
//     throw "Parameter is not passed!";
//   }

//   if (typeof obj1 != "object" || typeof obj2 != "object") {
//     throw "Parameter is not an object!";
//   }

// }



// function computeObject(object, func) {
//   if (object === undefined) {
//     throw "Parameter is not passed!";
//   }
//   if (typeof object != "object") {
//     throw "Parameter is not an object!";
//   }
//   if (Object.keys(object).length < 1) {
//     throw "Objects should contain at least one elements!";
//   }
//   for (count = 0; count < Object.keys(object).length; count++) {
//     if (typeof object[Object.keys(object)[count]] != "number") {
//       throw "Values for each key should be a number!";
//     }
//   }
//   if (typeof func != "function") {
//     throw "Second parameter is not a funciton!";
//   }

//   for (loop = 0; loop < Object.keys(object).length; loop++) {
//     value = object[Object.keys(object)[loop]];
//     object[Object.keys(object)[loop]] = func(value);
//   }

//   return object;
// }

// a = computeObject({ a: 3, b: 7, c: 5 }, (n) => n * 2);
// console.log(a);
