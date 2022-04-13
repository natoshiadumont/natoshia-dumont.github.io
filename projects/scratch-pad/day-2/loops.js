// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  
  //use for in loop to loop over array values an print to the console
  for (var i = 0; i < array.length; i++)
  console.log(array[i]);
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  //using for loop, print array values backwards by decrementing value of i
  for (var i = array.length -1; i >= 0; i--) {
    console.log(array[i]);
}
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  // assign an empty to a variable named newArray
  var newArray = [];
  //using a for in loop to iterate through the keys in the object
  for (var key in object) {
  newArray.push(key);
  } 
  //return newArray
  return newArray;
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  //
  //use a for in loop and print keys of the object
 for (var key in object) {
   console.log(key);
 }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  //assign an empty array to variable Array
  var myArr = [];
  //using a for in loop, print the key values of the object
  for (var key in object) {
    myArr.push(object[key]);
  }
  //return Array
  return myArr;
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  //using a for in loop, print the object's values
  for (var key in object) {
    console.log(object[key])
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  // assign an empty array to var empty
  var objArray = [];
  //using a for in loop, iterate through all key value pairs
  for (var key in object) {
    objArray.push(object[key]);
  }
  //return the objArray length to the function
  return objArray.length;
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
//create an empty array named emtpyArr
var newArr = [];
//use a for in loop to push object values into emptyArr
for (var key in object) {
  newArr.push(object[key]);
}

//create empty array named empArr
//use a for loop to iterate through emptyArr and assign values in reverse by decrementing
for (var i = newArr.length - 1; i >= 0; i--) {
console.log(newArr[i]);
}
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
