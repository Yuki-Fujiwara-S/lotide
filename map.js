
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


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);

assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);

const numbers = [1,2,3,4];

const resultMultiplied3 = map(numbers, num => num * 3);

assertArraysEqual(resultMultiplied3, [3, 6, 9, 12]);

const objects = [{name: "Yuki", age: 100}, {name: "Bukayo", age: 21}];
const namesUpperCase = map(objects, person => person.name.toUpperCase());
assertArraysEqual(namesUpperCase, ["YUKI", "BUKAYO"]);

module.exports = map;
