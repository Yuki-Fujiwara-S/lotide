const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};


// It's okay for eqArrays to not return true for nested arrays or arrays of objects that are identical. 
// We will save this "deeper" problem for another day.

const eqArrays = function(array1, array2) {
  let boolOutput = false;
  for (i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      boolOutput = true;
    } else {
      boolOutput = false;
    }
  }
  return boolOutput;
};



assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2"]), false);
