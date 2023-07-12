const fibonacci = function (num) {
  let n = 0;
  let a = 1;
  let fib;
  if (+num > 0) {
    if (+num == 1) {
      fib = 1;
    }
    for (i = 0; i < +num - 1; i++) {
      fib = n + a;
      n = a;
      a = fib;
    }
    return fib;
  } else {
    return 'OOPS';
  }
};

// Do not edit below this line
module.exports = fibonacci;
