// #!/usr/bin/env node

'use strict';

/**
 * 1: reverseString()
 *
 *  a. Create a function called reverseString that takes a 
 *  String as its only input and returns a new String 
 *  representing the input String reversed.  For example:
 *  
 *      reverseString('hello');  // => 'olleh'
 * 
 * TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best? How do you know 
 *     when to stop looping?
 *  c. how do you access individual characters of a String?
 *  d. how do you concatenate Strings? What operator do we use?
 */

function reverseString(input) {
    // YOUR CODE GOES BELOW HERE //
    //assign var revInput the value of an empty string
    var revInput = '';
//with the use of the .split() method, turn the input's string into an array of its elements.
input = input.split('');
    //create a for loop that iterates through the new input array in reverse by decrementing the var i (i--)
    for (var i = input.length - 1; i >= 0; i--) {
    revInput += input[i];
    }
    return revInput;
    
    
    // YOUR CODE GOES ABOVE HERE //
}

console.log (reverseString('cat')); //should print 'tac'



// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports.reverseString = reverseString;
}