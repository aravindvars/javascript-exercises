const reverseString = function (text) {
  const n = text.length;
  let stringreverse = "";
  for (let i = n - 1; i >= 0; i--) {
    stringreverse += text.charAt(i);
  }
  return stringreverse;
};

// Do not edit below this line
module.exports = reverseString;
