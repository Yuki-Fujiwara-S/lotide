// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("🛑🛑🛑Assertion Failed: " + actual + " !== " + expected);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(23,"23");
assertEqual("HOlA", "hola");
assertEqual(1, 2);
assertEqual(100, 100);
assertEqual("Robert", "Robert");
