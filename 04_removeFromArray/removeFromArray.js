const removeFromArray = function (array, b) {
  // const a = [];
  let i;
  let index = array.indexOf(b);

  for (i = 0; i < array.length; i++) {
    if (array[i] == b) {
      // return a.splice(index, 1);
      // return a[a.indexOf(b)];
      let x = array.splice(index, 1);
      for (const element of array) {
        if (element != x) {
          return array;
        }
      }
    }
  }
};

// Do not edit below this line
module.exports = removeFromArray;
