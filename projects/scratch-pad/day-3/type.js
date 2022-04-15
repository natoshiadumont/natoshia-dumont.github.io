// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
 var sampleArr = ['This', 'is', 'an', 'array']
function isArray(value) {
    // YOUR CODE BELOW HERE //
    if (Array.isArray(value) === true){
        return true;
        }
        else { 
            return false; 
            }
    
    
    // YOUR CODE ABOVE HERE //
}
/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //

    /* filter out the following conditions to be false:
    -if object does not test true 
    -if value is not an object type is an array,
    -is Date, or strictly equals null, 
    return false*/
    if (typeof value !== 'object'
        || value instanceof Date
        || Array.isArray(value)
        || value === null) {
    return false;
    } 
    //use an else if statment to determine if value is an object 
    else if (typeof value === 'object') {
     return true;
    }
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */

function isCollection(value) {
    // YOUR CODE BELOW HERE //
    //if value is array => true
    if (Array.isArray(value)){
        return true;
        }
    /*else if value =>true for any of these conditions, return false:
     -is Not an object datatype
     -is Date
     -has a value of null
    ** This basically filters out all datatypes that
    TEST TRUE as an object datatype, but
    not intended as collections to return as false
    */
    else if (typeof value !== 'object'
        || value instanceof Date
        || value === null) {
    return false;
        }
    //else if value is an object datatype, also return true 
        else if (typeof value === 'object') {
     return true; 
    }
    
    // YOUR CODE ABOVE HERE //
}
var myArray = [1, 2, 3];
var myObj = {
    names: 'Tosh',
    age: 29,
    goodDriver: true
}
console.log(isCollection(myArray));
console.log(isCollection(myObj));

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //

     
//else if value is a string, return 'string'
if (typeof value === 'string'){
    return 'string';
}
//else if value is an array, return 'array'
else if (Array.isArray(value)){
        return 'array';
        }
//if value is undefined, return 'undefinded'
else if (typeof value === 'undefined'){
    return 'undefined';
}
//if value is a number, return 'number'
else if (typeof value === 'number'){
    return 'number';
}
//if value is a boolean, return 'boolean'
else if (typeof value === 'boolean'){
    return 'boolean';
}
//if value is function, return 'function'
else if (typeof value === 'function') {
    return 'function';
    }//if value is null, return 'null'
else if (value === null){
    return 'null';
}
//if value is a date, return 'date'
else if (value instanceof Date){
    return 'date';
}
else if (typeof value === 'object'){
    return 'object';
}    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
