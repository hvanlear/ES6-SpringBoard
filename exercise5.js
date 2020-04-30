new Set([1, 1, 2, 2, 3, 4]);
/// returns [1,2,3,4]

let ref = [...new Set("referee")].join("");
// returns ref

let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);
// 0: {Array(3) => true}
// key: (3) [1, 2, 3]
// value: true
// 1: {Array(3) => false}
// key: (3) [1, 2, 3]
// value: false

let array1 = [1, 2, 1, 1, 3, 4, 5];

function hasDuplicate(arr) {
  let newArr = [...new Set(arr)];
  return newArr.length !== arr.length ? true : false;
}

function isVowel(char) {
  return "aeiou".includes(char);
}

function vowelCount(str) {
  const vowelMap = new Map();
  for (let char of str) {
    let lowecaseChar = char.toLowerCase();
    if (isVowel(lowecaseChar)) {
      if (vowelMap.has(lowecaseChar)) {
        vowelMap.set(lowecaseChar, vowelMap.get(lowecaseChar) + 1);
      } else {
        vowelMap.set(lowecaseChar, 1);
      }
    }
  }
  return vowelMap;
}
