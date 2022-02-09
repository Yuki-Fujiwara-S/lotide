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
  if (array1.length === 0 && array2.length === 0) {
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

const middle = function(array) {
  let midOutput = [];
  const midArrayIndex = array.length / 2;
  if (array.length > 2) {
    if (array.length % 2 === 0) {
      midOutput.push(array[midArrayIndex - 1]);
      midOutput.push(array[midArrayIndex]);
    } else {
      midOutput.push(array[Math.floor(midArrayIndex)]);
    }
  }
  return midOutput;
};

//No middle tests
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1,2]), []);

//Odd tests
assertArraysEqual(middle([1,2,3]), [2]);
assertArraysEqual(middle([1,2,3,4,5]), [3]);

//Even tests
assertArraysEqual(middle([1,2,3,4]), [2,3]);
assertArraysEqual(middle([1,2,3,4,5,6]), [3,4]);

