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

///computer property names

//desstructing +++++++++++++++++++++++++++++++++++++++++++++++++++++

//destructring objects ------------------

const teaOrder = {
  variety: "oolong",
  teaName: "winter sprount",
  origin: "taiwan",
  price: 12.99,
  hasCaffine: true,
  quantity: 3,
};

/// old way of extracting values and putting them into variables

// const price = teaOrder.pric;
// const quantitiy = teaOrder.quantity;

/// new way of extracting values
// const { price, quantity, teaName } = teaOrder;
const { origin } = teaOrder;

// we can use the rest operator to collect the rest of the keys

const { price, quantity, teaName, ...others } = teaOrder;
// we can create a default value for a value
const { brewTemp = 165 } = teaOrder;

//destrucuting in a function and aadding a default value

function checkout(tea) {
  const { quantity = 1, price } = tea;
  console.log(quantity * price);
}
checkout(teaOrder);

const teaOrder2 = {
  variety: "green",
  teaName: "silver needle",
  origin: "taiwan",
  price: 12.99,
  hasCaffine: true,
  quantity: 3,
};

checkout(teaOrder2); // returns 12.99 due to the default value of 1

/// destrucuting arrays +++++++++++++++++++++++++++++++++++++++++++++++++++++

// unlike object descturing where the naming matters, with arrays it is a matter of position

const students = [
  { name: "drake", gpa: 4.5 },
  { name: "bob", gpa: 2.2 },
  { name: "fefit", gpa: 4 },
  { name: "mike", gpa: 3.4 },
];

const [topSutdnet] = students;

/// we can alose us the rest operator
const [first, ...losers] = students;

/// funciton destructring  +++++++++++++++++++++++++++++++++++++++++++++++++++++

//we can use destructring to extract key/vales pairs from an object in variables.

const teaOrder3 = {
  variety: "green",
  teaName: "silver needle",
  origin: "taiwan",
  price: 12.99,
  hasCaffine: true,
  quantity: 4,
};

//similar to the checkout  example above :

function getTotalTea({ quantity = 1, price }) {
  return quantity * price;
}

const longJumpResults = ["tam", "jak", "mik", "lik"];

function awardMedals([gold, silver, bronze]) {
  return { gold, silver, bronze };
}
// {gold: "tam", silver: "jak", bronze: "mik"}

//destructuring nested objects +++++++++++++++++++++++++++++=

//destructuring swap +++++++++++++++++++++++++++++=

let good = "mayo";
let bad = "whipped cream";
// old way of swaping, we need to create a temporary holder variable
// let temp = good;
// good = bad;
// bad = temp;

//new way using destrucutring

[bad, good] = [good, bad];
