const palindromes = function (string) {
  let string2 = string.toLocaleLowerCase().replace(/[!,.,,, ]/g, '');
  let array = string2.split('');
  let name = [];
  for (let i = array.length - 1; i >= 0; i--) {
    name.push(array[i]);
  }
  let text_rev = name.map((n) => n).join('');
  if (text_rev === string2) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
