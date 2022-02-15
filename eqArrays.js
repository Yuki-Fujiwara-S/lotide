// It's okay for eqArrays to not return true for nested arrays or arrays of objects that are identical.
// We will save this "deeper" problem for another day.

const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};


module.exports = eqArrays;
