// Object Enhancements Exercise

// Same keys and values
function createInstructor(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
  };
}
// Same keys and values ES2015

function createInstructor2015(firstName, lastName) {
  return {
    firstName,
    lastName,
  };
}

// Computed Property Names
var favoriteNumber = 42;

var instructor = {
  firstName: "Colt",
};
instructor[favoriteNumber] = "That is my favorite!";

// Computed Property Names ES2015

let favoriteNumber2015 = 42;
let instructor2015 = {
  firstName: "colt",
  [favoriteNumber]: "this is my fave number",
};

// Object Methods
var instructor1 = {
  firstName: "Colt",
  sayHi: function () {
    return "Hi!";
  },
  sayBye: function () {
    return this.firstName + " says bye!";
  },
};
// Object Methods ES2015

let instructor2 = {
  firstName: "colt",
  sayHi() {
    return "hi";
  },
  sayBye() {
    return this.firstName + "says bye";
  },
};

// createAnimal function

function createAnimal(species, verb, noise) {
  return {
    species,
    verb: function () {
      return this.noise;
    },
    noise,
  };
}

const dog = createAnimal("dog", "bark", "woof");
