/* =====================
# Lab 2, Part 2 — Underscore Each Function

## Introduction

Up to this point, we have used Javascript's for loop to loop through data. Underscore's _.each function provides us with an easy to read, simple way to accomplish the same goal.

## Task

Find two previous labs that use for loops. Rewrite these labs to use _.each.

## Syntax
You can see an example of how to use ._each in the underscore documentation: http://underscorejs.org/#each and in the code below.

var myArray = [1, 10, 100, 1000];

_.each(myArray, function(value, key, list) {
  console.log(value, key, list);
});
===================== */

//From Lab 1 Part 1
/* =====================
Instructions: "Write a function which counts the number of times a value occurs in an array "
Example: "countItem(['a', 'b', 'a'], 'a') should return 2"
===================== */

var countItem = function (arr, item) {
  var x=0;
  _.each(arr, function(value, key, list){
    if (list[key] === item) {
      x++;
    }
  });
  return x;
};

console.log('countItem success:', countItem([1, 2, 3, 4, 5, 4, 4], 4) === 3);

// From Lab 1 Part 2
/* =====================
Instructions: Write a function that takes a list of numbers and returns a list with only numbers above 10
===================== */

var filterOutLessThan10 = function(l) {
  var arr1 = [];
    _.each(l, function(value, key, list){
    if (list[key]>10) {
      arr1.push(list[key]);
    }
  });
  return arr1;
};

var test = filterOutLessThan10([4, 11]).length === 1 && filterOutLessThan10([4, 11])[0] === 11;
console.log('filterOutLessThan10 success:', test);

//From Week2 Lab 2
/* =====================

// Here's an array that we need to loop through:
var theArray = ['A short story.', 42, 55, ['Another story'], 23, 12, 2, 4, 5, 6, 'bar', 'foo'];

// Here's the variable we need to hold our count in:
var exampleSum = 0; // To count of the strings

// A loop for summing the contents of theArray
for (var i = 0; i < theArray.length; i++) {
  var arrayValue = theArray[i];
  if (typeof arrayValue === 'string') {         // String case
    exampleSum = exampleSum + arrayValue.length
  } else if (typeof arrayValue === 'number') {  // Number case
    exampleSum = exampleSum + arrayValue
  } else {                                      // Otherwise
    console.log("Not sure how to proceed with value:", arrayValue)
  }
}

// Store sum you compute in this variable:
var yourSum = 0;// To count of the strings
=====================*/

var theArray = ['A short story.', 42, 55, ['Another story'], 23, 12, 2, 4, 5, 6, 'bar', 'foo'];
var yourSum = 0;

_.each(theArray, function (value, k, list) {
  if (typeof list[k] === 'string') {         // String case
    yourSum = yourSum + list[k].length;
  } else if (typeof list[k] === 'number') {  // Number case
    yourSum = yourSum + list[k];
  } else {                                      // Otherwise
    console.log("Not sure how to proceed with value:", list[k]);
  }
});

console.log("Success: ", yourSum === 169);
