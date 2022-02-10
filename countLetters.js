const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(wordToCount) {
  const results = {};
  for (let letter of wordToCount) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
};

const lightHouseCounted = countLetters("lighthouse in the house");
assertEqual(lightHouseCounted["l"], 1);
assertEqual(lightHouseCounted["i"], 2);
assertEqual(lightHouseCounted["g"], 1);
assertEqual(lightHouseCounted["h"], 4);
assertEqual(lightHouseCounted["t"], 2);
assertEqual(lightHouseCounted["o"], 2);
assertEqual(lightHouseCounted["u"], 2);
assertEqual(lightHouseCounted["s"], 2);
assertEqual(lightHouseCounted["e"], 3);
assertEqual(lightHouseCounted["n"], 1);

