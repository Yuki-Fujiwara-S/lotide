# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @yukifujiwara/lotide`

**Require it:**

`const _ = require('@yukifujiwara/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEquals`: returns assertion for Array Equality
* `assertEqual`: returns assertion for equality of primitive data types
* `assertObjectsEqual`: returns assertion for Object equality
* `countLetters`: counts number of letters
* `countOnly`: counts the true values in passed object
* `eqArrays`: checks Array equality
* `eqObjects`: checks object equality
* `findKey`: finds key of callback function statement
* `findKeyByValue`: find key by passed value
* `head`: find first element in array
* `letterPositions`: returns an array of letter positions of letters in a word
* `map`: performs callback on items in an array
* `middle`: finds item(s) in middle of array
