const removeFromArray = function (array, ...args) {
  const output = array.filter(function (obj) {
    return args.indexOf(obj) === -1;
  });
  return output;
};

// Do not edit below this line
module.exports = removeFromArray;
