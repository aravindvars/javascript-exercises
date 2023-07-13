const findTheOldest = function (array) {
  const date = new Date();
  const year = array
    .map((yea) => {
      if (!yea.yearOfDeath) {
        yea.yearOfDeath = date.getFullYear();
      }
      return yea;
    })
    .sort((a, b) =>
      a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth ? 1 : -1
    );

  // const maxAge = year.sort(function (a, b) {
  //   return a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth
  //     ? 1
  //     : -1;
  // });
  return (oldest = year[array.length - 1]);

  // const maxiAge = array
  //   .reduce(function (name) {
  //     const date = new Date();
  //     if (!name.yearOfDeath) {
  //       name.yearOfDeath = date.getFullYear();
  //     }
  //   }, 0)
  //   .sort((a, b) =>
  //     a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth ? 1 : -1
  //   );
  // return (oldest = maxAge[array.length - 1]);
};
// Do not edit below this line
module.exports = findTheOldest;
