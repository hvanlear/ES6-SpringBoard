// Destructuring Exercise
// Object Destructuring 1
// What does the following code return/print?

let facts = { numPlanets1: 8, yearNeptuneDiscovered: 1846 };
let { numPlanets1, yearNeptuneDiscovered } = facts;

console.log(numPlanets1); // 8
console.log(yearNeptuneDiscovered); // 1846

// Object Destructuring 2
// What does the following code return/print?

let planetFacts = {
  numPlanets: 8,
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659,
};

let { numPlanets, ...discoveryYears } = planetFacts;

console.log(discoveryYears); // ? {yearNeptuneDiscored: 1846, yearMarsDiscovered: 1659}

// Object Destructuring 3
// What does the following code return/print?

function getUserData({ firstName, favoriteColor = "green" }) {
  return `Your name is ${firstName} and you like ${favoriteColor}`;
}

getUserData({ firstName: "Alejandro", favoriteColor: "purple" }); // ? // Your name is Alejandro and you like purple
getUserData({ firstName: "Melissa" }); // ?Your name is Melissa and you like Green
getUserData({}); // ? Your name is undefined and you like green

// Array Destructuring 1
// What does the following code return/print?

let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // ? maya
console.log(second); // ? marisa
console.log(third); // ? chi

// Array Destructuring 2
// What does the following code return/print?

let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
  "Raindrops on roses",
  "whiskers on kittens",
  "Bright copper kettles",
  "warm woolen mittens",
  "Brown paper packages tied up with strings",
];

console.log(raindrops); // "Raindrops on roses"
console.log(whiskers); // ? "whiskers on kittens"
console.log(aFewOfMyFavoriteThings); // ? "Bright copper kettles",
// "warm woolen mittens",
// "Brown paper packages tied up with strings"

// Array Destructuring 3
// What does the following code return/print?

let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]];

console.log(numbers); // ? [10,30,20]

/// ES 2015 Refactor
const obj = {
  numbers: {
    a: 1,
    b: 2,
  },
};

const {
  numbers: { a, b },
} = obj;

// Array Swap

let arr = [1, 2];
[arr[0], arr[1]] = [arr[1], arr[0]];

//raceResults()

const raceResults = ([first, second, third, ...rest]) => {
  return { first, second, third, rest };
};

const runners = ["bob", "mike", "helen", "jef", "tanner"];
