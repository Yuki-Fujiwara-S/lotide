const eqArrays = function(array1, array2) {
  let boolOutput = false;
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] === array2[i]) {
        boolOutput = true;
      } else {
        boolOutput = false;
      }
    }
  }
  if (array1.length === 0 && array2.length === 0){
    boolOutput = true;
  }
  return boolOutput;
};


const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅The arrays are equal!✅ : ${array1} === ${array2}`);
  } else {
    console.log(`🛑The arrays are NOT equal!🛑 : ${array1} !== ${array2}`);
  }
};

//return a subset of a given array, removing unwanted elements
const without = function(source, itemsToRemove) {
  let outputArray = [...source];
  for (let r = 0; r < itemsToRemove.length; r++) {
    for (let c = 0; c < outputArray.length; c++) {
      if (itemsToRemove[r] === outputArray[c]) {
        outputArray.splice(c, 1);
      }
    }
  }
  return outputArray;
};


//tests

assertArraysEqual(without([1, 2, 3], [1, 2]), [3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1","2"]);
assertArraysEqual(without([1, 2, 3], [2, 1]), [3]);



const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);