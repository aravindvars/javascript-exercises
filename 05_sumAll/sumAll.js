const sumAll = function (a, b) {
  let sum;
  if (a <= 0 || b <= 0 || typeof a != "number" || typeof b != "number") {
    sum = "ERROR";
  } else {
    sum = 0;
    if (a < b) {
      for (let i = a; i <= b; i++) {
        sum += i;
      }
    } else {
      for (let i = a; i >= b; i--) {
        sum += i;
      }
    }
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
