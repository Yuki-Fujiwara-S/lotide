const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'House']", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.deepEqual(result, ["Lighthouse", "Labs"]);
  });

  it("returns [], ['Hello']", () => {
    const resultTwo = tail(["Hello"]);
    assert.deepEqual(resultTwo, []);
  });

  it("returns [], []", () => {
    const resultThree = tail([]);
    assert.deepEqual(resultThree, []);
  });

  it("returns unchanged ['Yo Yo', 'Lighthouse', 'Labs'] when tail is called on  ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.deepEqual(words, ["Yo Yo", "Lighthouse", "Labs"]);
  });

  
});

