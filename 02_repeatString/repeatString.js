const repeatString = function (string, num) {
  let repeat = "";
  if (num < 0) {
    repeat = "ERROR";
  } else {
    for (let i = 0; i < num; i++) {
      repeat += string;
    }
  }

  return repeat;
  // console.log(repeat);
};
// repeatString("hey", -1);
// Do not edit below this line
module.exports = repeatString;
