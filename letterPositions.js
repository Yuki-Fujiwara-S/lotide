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


const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  return results;
};

const helloTest = letterPositions("hello");

assertArraysEqual(helloTest["h"], [0])
assertArraysEqual(helloTest["e"], [1])
assertArraysEqual(helloTest["l"], [2,3])
assertArraysEqual(helloTest["o"], [4])
