//// rest and spread

function makeFamily(parent1, parent2, ...kids) {
  return {
    parents: [parent1, parent2],
    kids: kids.length ? kids : 0,
  };
}

const filterByType = (type, ...vals) => {
  return vals.filter((v) => typeof v === type);
};

///spread with array literals+++++++++++++++++++++++++++++++++++++++++

const things = ["helo", "goodby", 1, 2, 3, 4, true, true];
// we can spread the array into the above function
filterByType("string", ...things);

// we can make copies of arrays

let palette = ["lav", "sunflow", "orchid"];
//previously we would need to use the slice method
let paletCopy2 = palette.slice();
//now we can use spread operator, which also allows us to add items to
//the array
let paletteCopy = ["forest green", ...palette, "grass green", "sky blue"];
//we can also spread interables INTO an array
const vowels = "aeiou";
const arrayVowels = [...vowels];
// (5) ["a", "e", "i", "o", "u"]

/// spread with objects +++++++++++++++++++++++++++++++++++++++++

//objects are not considered iterables in javascript
//however we can use the same operator to copy over peices of an object into a
//new object
const tea = {
  type: "oolong",
  name: "winter sprount",
  origin: "taiwan",
};
const tea2 = { ...tea };
//we can add a property to the object
const teaTin = { ...tea, price: 22.99 };
///we can also change a porperty however the ordering does matter
const newTea = { ...tea, name: "golden frost" };
/// we cant add the property name first as when the spread operator runs
//it will overwrite/ignore the first
// const newTea = { name: "golden frost",...tea  };

/// we can also combine objects
const teaData = {
  steepTime: "20s",
  brewTemp: 157,
};

const fullTea = { ...tea, teaData };

/// spread and Deep Copies +++++++++++++++++++++++++++++++++++++++++

//Object Enahancements +++++++++++++++++++++++++++++++++++++++++
// previous to ES2015
function makePerson(first, last, age) {
  return {
    first: first,
    last: last,
    age: age,
  };
}
//newer way
function makeNewPerson(first, last, age) {
  return {
    first,
    last,
    age,
  };
}

///object methods
//older way of adding methods to objects
let mathStuff = {
  x: 200,
  add: function (a, b) {
    return a + b;
  },
  square: function (a) {
    return a * a;
  },
};
//new way
let mathStuff2 = {
  x: 200,
  add(a, b) {
    return a + b;
  },
  square(a) {
    return a * a;
  },
};
