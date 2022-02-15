const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");

//No middle tests
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1,2]), []);

//Odd tests
assertArraysEqual(middle([1,2,3]), [2]);
assertArraysEqual(middle([1,2,3,4,5]), [3]);

//Even tests
assertArraysEqual(middle([1,2,3,4]), [2,3]);
assertArraysEqual(middle([1,2,3,4,5,6]), [3,4]);
