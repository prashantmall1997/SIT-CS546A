const {
  mean,
  medianSquared,
  maxElement,
  fill,
  countRepeating,
  isEqual,
} = require("./arrayUtils");

const { camelCase, replaceChar, mashUp } = require("./stringUtils");

const { makeArrays, isDeepEqual, computeObject } = require("./objUtils");

// Mean Tests
try {
  // Should Pass
  const mean1 = mean([2, 3, 4]);
  console.log("Passed successfully");
} catch (e) {
  console.log(e);
  console.error("Failed test case");
  console.log("");
}
try {
  // Should Fail
  const mean2 = mean(1234);
  console.error("Passed successfully");
} catch (e) {
  console.log(e);
  console.log("Failed test case");
  console.log("");
}

// medianSquared
try {
  const median1 = medianSquared([1, 2, 4]);
  console.log("Passed successfully");
} catch (e) {
  console.log(e);
  console.log("Failed test case");
  console.log("");
}
try {
  const median2 = medianSquared([]);
  console.log("Passed successfully");
} catch (e) {
  console.log(e);
  console.log("Failed test case");
  console.log("");
}

// maxElement
try {
  const maxElement1 = maxElement([5, 6, 7]);
  console.log("Passed successfully");
} catch (e) {
  console.log(e);
  console.log("Failed test case");
  console.log("");
}
try {
  const maxElement2 = maxElement(5, 6, 7);
  console.log("Passed successfully");
} catch (e) {
  console.log(e);
  console.error("Failed test case");
  console.log("");
}

// fill
try {
  const fill1 = fill(6);
  console.log("Passed successfully");
} catch (e) {
  console.log(e);
  console.log("Failed test case");
  console.log("");
}
try {
  const fill2 = fill();
  console.log("Passed successfully");
} catch (e) {
  console.log(e);
  console.error("Failed test case");
  console.log("");
}

// countRepeating
try {
  const countRepeating1 = countRepeating([
    7,
    "7",
    13,
    "Hello",
    "Hello",
    "hello",
  ]);
  console.log("Passed successfully");
} catch (e) {
  console.log(e);
  console.log("Failed test case");
  console.log("");
}
try {
  const countRepeating2 = countRepeating([7, "7", 13, true, null]);
  console.log("Passed successfully");
} catch (e) {
  console.log(e);
  console.error("Failed test case");
  console.log("");
}

// isEqual
try {
  const isEqual1 = isEqual([1, 2, 3], [3, 1, 2]);
  console.log("Passed successfully");
} catch (e) {
  console.log(e);
  console.log("Failed test case");
  console.log("");
}
try {
  const isEqual2 = isEqual();
  console.log("Passed successfully");
} catch (e) {
  console.log(e);
  console.error("Failed test case");
  console.log("");
}

// camelCase
try {
  const camelCase1 = camelCase("my function rocks");
  console.log("Passed successfully");
} catch (e) {
  console.log(e);
  console.log("Failed test case");
  console.log("");
}
try {
  const camelCase2 = camelCase("");
  console.log("Passed successfully");
} catch (e) {
  console.log(e);
  console.error("Failed test case");
  console.log("");
}

// replaceChar
try {
  const replaceChar1 = replaceChar("Daddy");
  console.log("Passed successfully");
} catch (e) {
  console.log(e);
  console.log("Failed test case");
  console.log("");
}
try {
  const replaceChar2 = replaceChar(123);
  console.log("Passed successfully");
} catch (e) {
  console.log(e);
  console.error("Failed test case");
  console.log("");
}
console.log("");

// mashUp
try {
  const mashUp1 = mashUp("Patrick", "Hill");
  console.log("Passed successfully");
} catch (e) {
  console.log(e);
  console.log("Failed test case");
  console.log("");
}
try {
  const mashUp2 = mashUp("John");
  console.log("Passed successfully");
} catch (e) {
  console.log(e);
  console.error("Failed test case");
  console.log("");
}

// makeArrays
try {
  const first = { x: 2, y: 3 };
  const second = { a: 70, x: 4, z: 5 };
  const third = { x: 0, y: 9, q: 10 };
  const makeArrays1 = makeArrays([first, second, third]);
  console.log("Passed successfully");
} catch (e) {
  console.log(e);
  console.log("Failed test case");
  console.log("");
}
try {
  const first = { x: 2, y: 3 };
  const second = { a: 70, x: 4, z: 5 };
  const third = {};
  const makeArrays2 = makeArrays([first, second, third]);
  console.log("Passed successfully");
} catch (e) {
  console.log(e);
  console.error("Failed test case");
  console.log("");
}

// isDeepEqual
try {
  const first = { a: 2, b: 3 };
  const second = { a: 2, b: 4 };
  const third = { a: 2, b: 3 };
  const forth = {
    a: { sA: "Hello", sB: "There", sC: "Class" },
    b: 7,
    c: true,
    d: "Test",
  };
  const fifth = {
    c: true,
    b: 7,
    d: "Test",
    a: { sB: "There", sC: "Class", sA: "Hello" },
  };
  const isDeepEqual1 = isDeepEqual(forth, fifth);
  console.log("Passed successfully");
} catch (e) {
  console.log(e);
  console.log("Failed test case");
  console.log("");
}
try {
  const first = {};
  const second = [];
  const isDeepEqual2 = isDeepEqual(first);
  console.log("Passed successfully");
} catch (e) {
  console.log(e);
  console.error("Failed test case");
  console.log("");
}

// computeObject
try {
  const computeObject1 = computeObject({ a: 3, b: 7, c: 5 }, (n) => n * 2);
  console.log("Passed successfully");
} catch (e) {
  console.log(e);
  console.log("Failed test case");
  console.log("");
}
try {
  const computeObject2 = computeObject({ a: 3, b: 7, c: 5 });
  console.log("Passed successfully");
} catch (e) {
  console.log(e);
  console.error("Failed test case");
  console.log("");
}
