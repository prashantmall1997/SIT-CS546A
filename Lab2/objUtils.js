function makeArrays(objects) {
  if (objects === undefined) {
    throw "Parameter is not passed!";
  }

  if (!Array.isArray(objects)) {
    throw "Parameter is not an array!";
  }

  if (objects.length === 0) {
    throw "Array is empty";
  }

  for (count = 0; count < objects.length; count++) {
    if (typeof objects[count] != "object") {
      throw "All elements must be object!";
      break;
    }
    if (Object.keys(objects[count]).length === 0) {
      throw "Objects cannot be empty!";
      break;
    }
    if (Object.keys(objects[count]).length < 2) {
      throw "Objects cannot contain less than 2 elements!";
      break;
    }
  }

  let result = [];

  for (loop = 0; loop < objects.length; loop++) {
    for (iLoop = 0; iLoop < Object.keys(objects[loop]).length; iLoop++) {
      key = Object.keys(objects[loop])[iLoop];
      value = objects[loop][key];
      result.push([key, value]);
    }
  }

  return result;
}

function isDeepEqual(obj1, obj2) {
  if (obj1 === undefined || obj2 === undefined) {
    throw "Parameter is not passed!";
  }

  if (typeof obj1 != "object" || typeof obj2 != "object") {
    throw "Parameter is not an object!";
  }
}

function computeObject(object, func) {
  if (object === undefined) {
    throw "Parameter is not passed!";
  }
  if (typeof object != "object") {
    throw "Parameter is not an object!";
  }
  if (Object.keys(object).length < 1) {
    throw "Objects should contain at least one elements!";
  }
  for (count = 0; count < Object.keys(object).length; count++) {
    if (typeof object[Object.keys(object)[count]] != "number") {
      throw "Values for each key should be a number!";
    }
  }
  if (typeof func != "function") {
    throw "Second parameter is not a funciton!";
  }

  for (loop = 0; loop < Object.keys(object).length; loop++) {
    value = object[Object.keys(object)[loop]];
    object[Object.keys(object)[loop]] = func(value);
  }

  return object;
}

module.exports = { makeArrays, isDeepEqual, computeObject };
