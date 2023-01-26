const ftoc = function (farenheit) {
  let celcius;
  let celcius_rounded;
  celcius = (5 / 9) * (farenheit - 32);
  celcius_rounded = Math.round(celcius * 10) / 10;
  return celcius_rounded;
};

const ctof = function (celcius) {
  let farenheit_rounded;
  farenheit = (9 * celcius) / 5 + 32;
  farenheit_rounded = Math.round(farenheit * 10) / 10;
  return farenheit_rounded;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
