// Rest / Spread Operator Exercises

// Given this function:
function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function (num) {
    return num % 2 === 0;
  });
}

//Refactor it to use the rest operator & an arrow function:

function filterOutOdds2(...nums) {
  return nums.filter((num) => {
    return num % 2 === 0;
  });
}

//findMin

// Write a function called findMin that accepts a variable number of arguments
// and returns the smallest argument.

// Make sure to do this using the rest and spread operator.

function findMin(...nums) {
  return Math.min(...nums);
}

// mergeObjects
// Write a function called mergeObjects that accepts two objects and returns a new object which contains
// all the keys and values of the first object and second object.

function mergeObjects(obj1, obj2) {
  let newObj = { ...obj1, ...obj2 };
  return newObj;
}

// doubleAndReturnArgs
// Write a function called doubleAndReturnArgs which accepts an array and a
// variable number of arguments. The function should return a new array
// with the original array values and all of additional arguments doubled.

function doubleAndReturnArgs(arr, ...args) {
  let doubled = args.map((n) => {
    return n * 2;
  });
  let newArr = [...arr, ...doubled];
  return newArr;
}

// Slice and Dice!
// For this section, write the following functions using
// rest, spread and refactor these functions to be arrow functions!
const removeRandom = (items) => {
  let idx = Math.floor(Math.random() * items.length);
  return [...items.slice(0, idx), ...items.slice(idx + 1)];
};

/** Add every item in array2 to array1. */

const extend = (array1, array2) => {
  return [...array1, ...array2];
};

/** Add a new key/val to an object. */

const addKeyVal = (obj, key, val) => {
  // OPTION 1
  let newObj = { ...obj };
  newObj[key] = val;
  return newObj;

  // OPTION 2 (uses an object enhancement you'll see in the next unit)
  // return { ...obj, [key]: val };
};

/** Remove a key from an object. */

const removeKey = (obj, key) => {
  // OPTION 1
  let newObj = { ...obj };
  delete newObj[key];
  return newObj;

  // OPTION 2 (uses an object enhancement you'll see in the next unit)
  // ({ [key]: undefined, ...obj } = obj);
  // return obj;
};

/** Combine two objects. */

const combine = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};

/** Update an object, changing a key/value. */

const update = (obj, key, val) => {
  // OPTION 1

  let newObj = { ...obj };
  newObj[key] = val;
  return newObj;

  // OPTION 2 this uses an object enhancement you'll see in the next unit)
  // return { ...obj, [key]: val };
};
