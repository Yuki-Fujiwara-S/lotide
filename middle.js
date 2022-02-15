const assertArraysEqual = require("./assertArraysEqual");

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

module.exports = middle;

