// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */

function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
//filter out values that are not strings or numbers
if (typeof base === 'string' || typeof base === 'number') {
//return a function that test if base is greater than the test
return function greaterThan(test) {

if (typeof test === 'string' || typeof test === 'number') {

  /*if test parameter is greater than base,
   return a funciton named greaterThan that test whether 
   the given number is greater than the base value*/ 
  return test > base;
}
}
}

    // YOUR CODE ABOVE HERE //
}
var testing = createGreaterThanFilter(10); //will give the function a value of 10
console.log(testing(6)); //should return false
/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
if (typeof base === 'number' || typeof base === 'string') {
    return function lessThan(test){
        if (typeof test === 'number' || typeof test === 'string')
        return test < base;
    }
}
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    return function(testStr) {
 return (startsWith.toLowerCase() === testStr[0].toLowerCase());
}
    
    // YOUR CODE ABOVE HERE //
}
var test2 = createStartsWithFilter('l');
console.log(test2('apple'));
console.log(test2('lemon'));
console.log(test2('lx57bzw'));


/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
      return function(testStr) {
 return (endsWith.toLowerCase() === testStr[testStr.length - 1].toLowerCase());
}
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
//create a result variable with the initial vlaue of an array. 
let result = [];  
//return a function of a for loop that iterates through the given string parameters, and modifies the value
for (var i = 0; i < strings.length; i++) {
    result.push(modify(strings[i]));
}return result;

    // YOUR CODE ABOVE HERE //
}
/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    let result;   
    for (var i = 0; i < strings.length; i++) {
        if (test(strings[i]) === false) {
         return result = false;
        } 
        else {
            result = true;
        } 
    }
    return result;
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}