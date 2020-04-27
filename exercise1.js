// Arrow Functions Exercise

let double = (arr) => {
  return arr.map((val) => {
    return val * 2;
  });
};

let squareAndFindEvens = (numbers) => {
  let squares = numbers.map((num) => {
    return num ** 2;
  });
  let evens = squares.filter((square) => {
    return square % 2 === 0;
  });
  return evens;
};
