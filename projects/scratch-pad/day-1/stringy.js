// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
function length(string) {
    // YOUR CODE BELOW HERE //

    //have function return the parameter string'slength using .length method

    return string.length;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
    //with the use of the toLowerCase method, return the value of the string parameter to lowercase
    return string.toLowerCase();


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
    //with the use ofthe toUpperCase() method, return the value of the string forced to uppercase
    return string.toUpperCase();


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
    //convert the elements of a string into values of an array with .split() method
    string = string.split(' ');
    //reassign the string array to join values with a dash instead of a space
    string = string.join('-');
    return string = string.toLowerCase();

    // YOUR CODE ABOVE HERE //
}
console.log(toDashCase('Hey you'));
/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
    /*create a conditional statment that if the character in the zeroth index of 
    string is LOOSLEY equal to char, it will return boolean value of true. 
    Use the toLowerCase() method to make comparison case insensitive*/
    if ((string[0]).toLowerCase() == char.toLowerCase()) {
        return true;
    } else {
        return false;
    }
    //create an else statement that if the string' zeroth index is NOT loosely equal to char, it returns the boolean value of false

    // YOUR CODE ABOVE HERE //
}
console.log
console.log(beginsWith('Natoshia', 'n'));
/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
//create a condtional statemetns that if string[string.length - 1] is loosely equal to char, it will return true. Otherwise it should return false
//to make case insensiive, use the .toUpperCase() method on each side of the loose comparison operator
if (string[string.length - 1].toUpperCase() == char.toUpperCase()) {
    return true;
} else {
    return false;
}


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    // return combined string with the use of the addition operator (+)
return stringOne + stringTwo;


    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);
//with the use of the .join() method, return stringOne and stringTwo combined
return args.join('');

    // YOUR CODE ABOVE HERE //
}
console.log(join('natoshia', 'Dumont')); //should pring 'natoshiaDumont'
/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
//create if statment that tests if stringOne.length is greater than stringTwo.length
if (stringOne.length > stringTwo.length) {
    // if the above statement is true, return stringOne
    return stringOne;
} else {
//by using an else statment, if the first stament is false, return stringTwo
return stringTwo;
}
    // YOUR CODE ABOVE HERE //
}
console.log(longest('Natoshia', 'Dumont')); //should print the string 'Natoshia'
/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

//create a conditional statment that determines if stringOne is higher in alphabetical order than stringOne (stringOne < stringTwo)
if (stringOne < stringTwo) {
    //return the number 1 if the above statment is true
    return 1;
} 
//create else if statment that if stringOne > stringTwo, return the number -1
else if (stringOne > stringTwo) {
        return - 1;
}
//create else stamtnet that if they are stringOne is neither greater than or less than stringTwo (which would mean they are equal) return the number zero
else {
    return 0;
}





    // YOUR CODE ABOVE HERE //
}
console.log(sortAscending('apple', 'cat')); //should log the number 1
/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
//create a contditonal staments that if stringOne is greater than stringTwo, return the number value 1
if (stringOne > stringTwo) {
    return 1;
} 
//make an else if statment that if stringOne is less than stringTwo, return a - 1
else if  (stringOne < stringTwo) {
    return - 1;
}
//create an else staments that if stringOne is neither greater than or less than stringTwo (if the string are EQUAL) return the number value 0
else {
    return 0;
}



    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}
