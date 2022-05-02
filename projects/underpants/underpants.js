// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

// const { result } = require("lodash");

// const { result } = require("lodash");

// const { keyBy, result } = require("lodash");

// const { result } = require("lodash");

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
_.identity = function(value) {
    return value; 
}

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
_.typeOf = function(value) {
    if (typeof value === 'string') {
        return 'string';
    }
    else if (typeof value === 'number') {
        return 'number';
    }
    else if (Array.isArray(value)) {
        return 'array';
    }
    else if (typeof value === 'undefined') {
        return 'undefined';
    }
    else if (typeof value === 'boolean') {
        return 'boolean';
    }
    else if (typeof value === 'function') {
        return 'function';
    }
    else if (value === null) {
        return 'null';
    }
    else if (typeof value === 'object' && !(value instanceof Date)){
        return 'object';
    }

}

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
_.first = function(array, number) {
    //creat an array literal assigned to name result
    var result = [];
    //iterate through the array using i < array[number] to stop iteration 
    for (var i = 0; i < array.length - 1; i++) {
        if (!(Array.isArray(array)) || number <= 0) {
            result = [];
        }
        else if (number > array.length) {
            result = array;
        }
        else if (typeof number !== 'number') {
            result = array[0];
        }
        else {
            result = array.slice(0, - i);
        }

    }
    return result;
}

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
_.last = function(array, number) {
    //create an array literal named result
    var result = [];
    //for loop over the entire array
    for (var i = 0; i < array.length; i++) {
        //determine if number is numerical value => result = array[length -1]
        if (typeof number !== 'number' ) {
            result = array[array.length - 1];
        }
        else if (number > array.length) {
            result = array;
        }
        else if (number <= 0 || !(Array.isArray(array))) {
            result = [];
        }
        else {
            result = array.slice(array.length - number, (i + 1));   
        }
    }
    return result;
}

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
_.indexOf = function(array, value) {
    //declare a variable named result 
    let result;
    //make a for loop to iterate over the given array
    for (var i = 0; i < array.length; i++) {
        if (array[i] === value) {
            result = i;
            return result;
        }
        //otherwise, result is - 1
        else {
          result = -1;
        }
    }
    return result;
}

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
_.contains = function(array, value) {
    return array.includes(value) ? true: false   
}

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
//create a function _.each with collection and func as arguments
_.each = function(collection, func){
    //determine if collection is an array, conditional statment
    if (Array.isArray(collection) === 'true') {
        //itterate through the values of the array
        for (var i = 0; i < collection.length; collection++) {
            //for each iteration, 
            func(collection[i], i, collection);
        }
    }
    else {
        for (var key in collection) {
            func(collection[key], key, collection);
        }
    }
    }

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
_.unique = function(array) {
    //create result variable equal to an empty array
    let result = [];
    //use for loop to itterate through array
    for(let i = 0; i < array.length; i++) {
    if (i === _.indexOf(array, array[i])) {
        result.push(array[i]);
    }
  }  
    return result;
}


/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
//create function_.filter that takes in an array and a function as arguments
_.filter = function(array, func) {
    //declare a variable newArray with initial value of array literal
    let result = [];
    //itterate over all values of array
    for(let i = 0; i < array.length; i++) {
        //if calling that function returns true for that elements: result += array[i]
        if (func(array[i], i, array) === true) {
            result.push(array[i]);
        }
    }
    //return final value of result
    return result;
}


/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/
//assign a function to _.reject that takes in an array and a function
_.reject = function(array, func) {
    //declare a variable newArray with initial value of array literal
    let result = [];
    //itterate over all values of array
    for(let i = 0; i < array.length; i++) {
        //if calling that function returns true for that elements: result += array[i]
        if (func(array[i], i, array) === false) {
            result.push(array[i]);
        }
    }
    //return final value of result
    return result;
}

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
_.partition = function(array, func) {
    //create the following two variables assigned an array literal, filterArr and rejectArr
    let filterArr = _.filter(array, func);
    let rejectArr = _.reject(array, func);
    //let result variable equal the value of filterArr.concat(rejectArr);
    let result = [filterArr, rejectArr];
    return result;
}

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
//declare a function named _.map that takes in a collection and a function
_.map = function(collection, func) {
    //assign variable newArray the value of an array literal
    let newArray = [];
    //determine if collection is an array
    if (Array.isArray(collection)) {
       //use for loop to call function through each value in array 
       for (let i = 0; i < collection.length; i++) {
       //call function on each element with the element, it's index, collection as its arguments
        newArray.push(func(collection[i], i, collection));
       //save return value to newArray 
    }
    } 
    //determine if collection is an object  
    else if ((typeof collection === 'object') ){
        //use for in loop to call function through each value in object
        for (var key in collection) {
        //call function on each element with the element, it's index, collection
        newArray.push(func(collection[key], key, collection));
        //save return value to newArray    
        }    
    }  
    //return value of newArray
    return newArray;    
    }


/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
//declare pluck function that takes in an array of objects and a property
_.pluck = function(array, prop) {
    //create variable result that is an array literal
    let result = [];

    //determine if value of property for element is equal to prop
    return _.map(array, function(arrElement) {
        if (arrElement[prop]) {
            return arrElement[prop];
        }
        else {
            return false;
        }
    });
}
    



/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
//create function ever that takes in collection and function as arguments
_.every = function(collection, func) {
    //declare variable result
    let result;
    if (typeof func !== 'function') {
        for (let i = 0; i < collection.length; i++) {
            if (collection[i] === false) {
                return false;
            }
            else if (collection[i] === true) {
                result = true;
            }
        }
        return result;
    }
    if (Array.isArray(collection)) {
        //if an array, call every elemnt of collection with params: element, index, collection
        for (let i = 0; i < collection.length; i++) {
            //if any value returns false, immediately return false
            if (func(collection[i], i, collection) === false) {
                result = false;
                return result;
            }
            else {
                result = true;
            } 
        } return result;
    }

    else if (typeof collection === 'object') {
        //create for in loop over values in object
        for (var key in collection) {
            //determine if a value returns false, immediately return result as false
            if (func(collection[key], key, collection) === false) {
                result = false;
                return result;
            }
            else {
               result = true; 
            }   
            }
        }
        return result; 
    } 

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
_.some = function(collection, func){
    //declare result variable
    let result;
    if (typeof func !== 'function') {
        for (let i = 0; i < collection.length; i++) {
            if (collection[i] === true) {
                return true;
            }
            else if (collection[i] === false) {
                result = false;
            }
        }
        return result;
    }
    //determine if collection is an array or object
    if (Array.isArray(collection) === true) {
        for (var i = 0; i < collection.length; i++) {
            if (func(collection[i], i, collection) === true) {
                result = true;
                return result;
            }
            else {
                result = false;
            }
        } return result;
    }
    if (typeof collection === 'object') {
        for (var key in collection) {
            if (func(collection[key], key, collection) === true) {
                result = true;
                return result;
            }
            else {
                result = false;
            }
        }
        return result;
    }
}

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/
_.reduce = function(array, func, seed){
    //determine if NO see was passed into the function
    if (seed === undefined) {
        //assing see the first value in the input array
        seed = array[0];
        for (let i = 1; i < array.length; i++) {
            //reassign seed to the result of calling the 
            //input function on the current value
            //of seed, the current indez, and the collection
        
            seed = func(seed, array[i], i, array);
        }
    }
    else {
        for (let i = 0; i < array.length; i++) {
            seed = func(seed, array[i], i, array);

        }
    }
    return seed;        
    // else it was
}

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/
//declare extend function with params; object1, object2
_.extend = function(data, ...obj) {
    return Object.assign(data, ...obj);
}
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
