// // function mean(array) {
// //   if (array === undefined) {
// //     throw "Parameter is not passed!";
// //   }

// //   if (!Array.isArray(array)) {
// //     throw "Parameter is not an array!";
// //   }

// //   if (array.length === 0) {
// //     throw "Array is empty";
// //   }

// //   for (count = 0; count < array.length; count++) {
// //     if (typeof array[count] != "number") {
// //       throw "Not all elements are numbers";
// //       break;
// //     }
// //   }

// //   sum = array.reduce((a, b) => a + b, 0);
// //   mean = sum / array.length;
// //   return mean;
// // }

// // // mean()
// // // mean([])
// // // mean([1,2,3,"Hello"])
// // // mean(["1","2","3"])
// // tMean = mean([2.2, 2.2, 2.2, 2.2]);
// // console.log(tMean);

// // function medianSquared(array) {
// //   if (array === undefined) {
// //     throw "Parameter is not passed!";
// //   }

// //   if (!Array.isArray(array)) {
// //     throw "Parameter is not an array!";
// //   }

// //   if (array.length === 0) {
// //     throw "Array is empty";
// //   }

// //   for (count = 0; count < array.length; count++) {
// //     if (typeof array[count] != "number") {
// //       throw "Not all elements are numbers";
// //       break;
// //     }
// //   }

// //   array.sort();
// //   if (array.length % 2 === 0) {
// //     mid1 = array.length / 2;
// //     mid2 = mid1 - 1;
// //     median = (array[mid1] + array[mid2]) / 2;
// //     medianSquare = median ** 2;
// //   } else {
// //     mid = Math.floor(array.length / 2);
// //     median = array[mid];
// //     medianSquare = median ** 2;
// //   }

// //   return medianSquare;
// // }

// // tMedian = medianSquared([1, 2, 3, 4, 5, 6]);
// // console.log(tMedian);

// // function maxElement(array) {
// //   if (array === undefined) {
// //     throw "Parameter is not passed!";
// //   }

// //   if (!Array.isArray(array)) {
// //     throw "Parameter is not an array!";
// //   }

// //   if (array.length === 0) {
// //     throw "Array is empty";
// //   }

// //   for (count = 0; count < array.length; count++) {
// //     if (typeof array[count] != "number") {
// //       throw "Not all elements are numbers";
// //       break;
// //     }
// //   }

// //   let result = {};
// //   let max = null;
// //   for (count = 0; count < array.length; count++) {
// //     if (max === null) {
// //       max = array[count];
// //     } else {
// //       if (max < array[count]) {
// //         result = {};
// //         result[array[count]] = count;
// //       }
// //     }
// //   }

// //   return result;
// // }

// // tmax = maxElement([5, 6, 7]);
// // console.log(tmax);

// // function fill(end, value) {
// //   if (end === undefined) {
// //     throw "'End' Parameter is not passed!";
// //   }

// //   if (typeof end != "number") {
// //     throw "'End' Parameter is not a number!";
// //   }

// //   if (end <= 0 || end % 1 != 0) {
// //     throw "'End' parameter must be a positive integer!";
// //   }

// //   let array = [];
// //   if (value != undefined) {
// //     for (count = 0; count < end; count++) {
// //       array.push(value);
// //     }
// //   } else {
// //     for (count = 0; count < end; count++) {
// //       array.push(count);
// //     }
// //   }

// //   return array;
// // }

// // tfill = fill(3);
// // console.log(tfill);

// // function countRepeating(array) {
// //   if (array === undefined) {
// //     throw "Parameter is not passed!";
// //   }

// //   if (!Array.isArray(array)) {
// //     throw "Parameter is not an array!";
// //   }

// //   if (!(array.length === 0)) {
// //     for (count = 0; count < array.length; count++) {
// //       if (typeof array[count] != "number" && typeof array[count] != "string") {
// //         throw "Not all elements are numbers";
// //         break;
// //       }
// //     }
// //   }

// //   if (array.length === 0) {
// //     return {};
// //   }

// //   result = {};
// //   final = {};
// //   for (elem = 0; elem < array.length; elem++) {
// //     if (result[array[elem]] === undefined) {
// //       result[array[elem]] = 1;
// //     } else {
// //       result[array[elem]] = result[array[elem]] + 1;
// //       final[array[elem]] = result[array[elem]];
// //     }
// //   }

// //   //console.log(result);
// //   return final;
// // }

// // tcount = countRepeating([1, 2, 3]);
// // console.log(tcount);

// // function isEqual(arrayOne, arrayTwo) {
// //   if (arrayOne === undefined || arrayTwo === undefined) {
// //     throw "Parameter is not passed!";
// //   }

// //   if (!(Array.isArray(arrayOne) || Array.isArray(arrayTwo))) {
// //     throw "Parameter is not an array!";
// //   }

// //   if (arrayOne.length != arrayTwo.length) {
// //     return false;
// //   }

// //   arrayOne.sort();
// //   arrayTwo.sort();

// //   for (count = 0; count < arrayOne.length; count++) {
// //     console.log("RAN");
// //     if (Array.isArray(arrayOne[count]) && Array.isArray(arrayTwo[count])) {
// //       console.log(arrayOne[count]);
// //       console.log(arrayTwo[count]);

// //       isEqual(arrayOne[count], arrayTwo[count]);
// //     } else if (!(arrayOne[count] === arrayOne[count])) {
// //       return false;
// //     }
// //   }

// //   return true;
// // }

// // tIsEq = isEqual(
// //   [
// //     [1, 2, 3],
// //     [4, 5, 6],
// //     [7, 8, 9],
// //   ],
// //   [
// //     [3, 1, 2],
// //     [5, 4, 11],
// //     [9, 7, 8],
// //   ]
// // );
// // console.log(tIsEq);

// function isEqual(arrayOne, arrayTwo) {
//   if (Array.isArray(arrayOne) && Array.isArray(arrayTwo)) {
//     for (var i = 0; i < arrayOne.length; ++i) {
//       if (arrayOne[i] !== arrayTwo[i]) {
//         return false;
//       }
//     }
//     return true;
//   } else {
//     throw "Error: Array is empty or array is not of proper type !";
//   }
// }

// temp = isEqual(
//   [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ],
//   [
//     [3, 1, 2],
//     [5, 4, 6],
//     [9, 7, 8],
//   ]
// );

// console.log(temp);

// let array = [1, 2, , 4, 5, 6];
// // array.forEach((element) => {
// //   if (typeof element !== "number" || typeof element !== "undefined") {
// //     throw `provided array has elements that are not numbers`;
// //   }
// // });

// console.log(typeof array[2]);
// // console.log(undefined === "number");

// Well, it should be false as the second element is undefined datatype. A possible workaround (or solution) could be just to add another check for undefined datatypes.
//  if (typeof element !== "number" || typeof element !== "undefined")

/*Say you have the following code:*/
function divideTwoNumbers(num, den) {
  return num / den;
}
/*JavaScript will let you call the function with the following input parameters without error!*/
console.log(divideTwoNumbers(10, 0)); //returns Infinity
console.log(divideTwoNumbers("Patrick", "Aiden")); //returns NaN
console.log(divideTwoNumbers()); //returns NaN
console.log(divideTwoNumbers(10)); //returns NaN

return `${someone} was looking for ${something} in the general vicinity of ${somewhere}`;

let myTrueBool = true;
let myFalseBool = false;
function sayHello() {
  return "Hello!";
}

let addTwoNumbers = function uncommon(num1, num2) {
  return num1 + num2;
};

let sayHi = () => {
  return "Hi there!";
};

let myobj = {
  name: "Patrick Hill",
  education: [
    { Level: "High School", Name: "Bayside High School" },
    { Level: "Undergraduate", Name: "Baruch College" },
    { Level: "Graduate", Name: "Stevens Institute of Technology" },
  ],
  hobbies: ["Playing music", "Family"],
};
/*If we want to store the array of objects in education into a variable, and the hobbies into
  another variable. We can use the following syntax:*/
let { education, hobbies } = myobj;
