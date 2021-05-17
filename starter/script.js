"use strict";

const array1 = [ 5, 3, 8, 2 ];

const sorted = array1.sort((a, b) => {
  console.log(`a: ${a}, b: ${b}`)
  return a - b;
});

console.log(sorted);


