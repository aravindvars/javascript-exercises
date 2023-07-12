const add = function (a, b) {
  let addition = a + b;
  return addition;
};

const subtract = function (a, b) {
  if (a > b) {
    return a - b;
  } else {
    return 1;
  }
};

const sum = function (arr) {
  let sum = 0;
  arr.forEach((num) => (sum += num));
  return sum;
};

const multiply = function (array) {
  let product = 1;
  array.forEach((num) => (product *= num));
  return product;
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (n) {
  if (n < 2) {
    return 1;
  } else {
    for (i = n; i > 1; i--) {
      fact = n * factorial(n - 1);
    }
    return fact;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
