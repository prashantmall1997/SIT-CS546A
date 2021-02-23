function mean(array) {
  if (array === undefined) {
    throw "Parameter is not passed!";
  }

  if (!Array.isArray(array)) {
    throw "Parameter is not an array!";
  }

  if (array.length === 0) {
    throw "Array is empty";
  }

  for (count = 0; count < array.length; count++) {
    if (typeof array[count] != "number") {
      throw "Not all elements are numbers";
      break;
    }
  }

  sum = array.reduce((a, b) => a + b, 0);
  mean = sum / array.length;
  return mean;
}

function medianSquared(array) {
  if (array === undefined) {
    throw "Parameter is not passed!";
  }

  if (!Array.isArray(array)) {
    throw "Parameter is not an array!";
  }

  if (array.length === 0) {
    throw "Array is empty";
  }

  for (count = 0; count < array.length; count++) {
    if (typeof array[count] != "number") {
      throw "Not all elements are numbers";
      break;
    }
  }

  array.sort();
  if (array.length % 2 === 0) {
    mid1 = array.length / 2;
    mid2 = mid1 - 1;
    median = (array[mid1] + array[mid2]) / 2;
    medianSquare = median ** 2;
  } else {
    mid = Math.floor(array.length / 2);
    median = array[mid];
    medianSquare = median ** 2;
  }

  return medianSquare;
}

function maxElement(array) {
  if (array === undefined) {
    throw "Parameter is not passed!";
  }

  if (!Array.isArray(array)) {
    throw "Parameter is not an array!";
  }

  if (array.length === 0) {
    throw "Array is empty";
  }

  for (count = 0; count < array.length; count++) {
    if (typeof array[count] != "number") {
      throw "Not all elements are numbers";
      break;
    }
  }

  let result = {};
  let max = null;
  for (count = 0; count < array.length; count++) {
    if (max === null) {
      max = array[count];
    } else {
      if (max < array[count]) {
        result = {};
        result[array[count]] = count;
      }
    }
  }

  return result;
}

function fill(end, value) {
  if (end === undefined) {
    throw "'End' Parameter is not passed!";
  }

  if (typeof end != "number") {
    throw "'End' Parameter is not a number!";
  }

  if (end <= 0 || end % 1 != 0) {
    throw "'End' parameter must be a positive integer!";
  }

  let array = [];
  if (value != undefined) {
    for (count = 0; count < end; count++) {
      array.push(value);
    }
  } else {
    for (count = 0; count < end; count++) {
      array.push(count);
    }
  }

  return array;
}

function countRepeating(array) {
  if (array === undefined) {
    throw "Parameter is not passed!";
  }

  if (!Array.isArray(array)) {
    throw "Parameter is not an array!";
  }

  if (!(array.length === 0)) {
    for (count = 0; count < array.length; count++) {
      if (typeof array[count] != "number" && typeof array[count] != "string") {
        throw "Not all elements are numbers";
        break;
      }
    }
  }

  if (array.length === 0) {
    return {};
  }

  result = {};
  final = {};
  for (elem = 0; elem < array.length; elem++) {
    if (result[array[elem]] === undefined) {
      result[array[elem]] = 1;
    } else {
      result[array[elem]] = result[array[elem]] + 1;
      final[array[elem]] = result[array[elem]];
    }
  }

  //console.log(result);
  return final;
}

function isEqual(arrayOne, arrayTwo) {
  if (arrayOne === undefined || arrayTwo === undefined) {
    throw "Parameter is not passed!";
  }

  if (!(Array.isArray(arrayOne) || Array.isArray(arrayTwo))) {
    throw "Parameter is not an array!";
  }

  if (arrayOne.length != arrayTwo.length) {
    return false;
  }

  arrayOne.sort();
  arrayTwo.sort();

  for (count = 0; count < arrayOne.length; count++) {
    if (Array.isArray(arrayOne[count]) && Array.isArray(arrayTwo[count])) {
      isEqual(arrayOne[count], arrayTwo[count]);
    } else if (!(arrayOne[count] === arrayOne[count])) {
      return false;
    }
  }

  return true;
}

module.exports = {
  mean,
  medianSquared,
  maxElement,
  fill,
  countRepeating,
  isEqual,
};
