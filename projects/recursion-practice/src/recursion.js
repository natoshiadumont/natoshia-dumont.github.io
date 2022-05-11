// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  //base - if n is one, return 1
  if (n === 1 || n === 0) {
    return 1;
  }
  if (n < 0) {
    return null;
  }
  // recursion- multipy integer by integer - 1;
  return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array, input = 0) {
  //base
  //if array.length = 0, return 0
  if (array.length === 0) {
    return 0;
  }
  // if array[array.length -1], return 0
  if (array.length === 1) {
    return array[0];
  }
  //recurrsion- array of 0 to sum(array.splice(1));
  
  output = array[0] + sum(array.slice(1)); 

  return output;
  
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
};

// 4. Check if a number is even.
var isEven = function(n) {
  //base 
  if (n ==0) {
    return true;
    //if after subtracting 2 over and over, it lands on 0, this means the number is even, so it returns true
  } else if (n === 1) {
    //if after being subtracted by 2 recursively, it reaches 0, it is odd, so false
    return false;
  }
  //recurssion
  //continue to subract 2 until you get to the value of 0 OR 1
  else if (n > 0) {
    return isEven(n - 2);
  } else{ 
    //if negative, return isEven(-n)
    return isEven(-n)
  }
  
  
  
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  //once num reach 0
  if (n === 0 ) {
    return 0;
  }
  // if (n === -1) {
  //   return 0;
  // }
  //recursion- add n to n + SumBelow(n - 1)
  if (n < 0) {
    return (n + 1) + sumBelow(n + 1);
  } else {
   return (n - 1) + sumBelow(n - 1);
  }
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y, output = []) {
   //base if x === y, return y
   if (x === y) {
    return [];
  }
  else if (x === y - 1) {
  return output;
  }
  else if (x === y + 1) {
    return output;
  }
if (x > y) {
  //recursion = if x === y + 1, return output
  
  var output = range(x - 1, y);
  output.unshift(x - 1);
  return output;
} else {
//declare output array to equal call range x + 1, y
output = range(x + 1, y);
//unshift values to put them into ascending order.
output.unshift(x + 1);
return output;  
}
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number

var exponent = function(base, exp) {
  //base- if exp = 0, return 1, if exp = 1, return base
  if (exp === 0){
  return 1;  
  }
  else if (exp === 1) {
    return base;
  }
//recursion: return base exponent(base, exp - 1)
//create a variable named result assigned to base * exponent (base, exp - 1)
if (exp < 0) {
  return 1 / (exponent(base, -exp));
}
else {
return base * (exponent(base, exp - 1));   
}

};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  //base: if n = 1, return false; if n = 0, return true
  if (n === 1) {
    return true;
  }
  else if (n === 0) {
    return false;
  }
  return powerOfTwo(n / 2);
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
  // base: stop when string.length <= 1 an return result and return string
   if(string.length <= 1){
    return string;
  }
  //recursion: return the last character of the string, then call back the function, with substr before the last value of the string,
  
  return string.charAt(string.length - 1) + reverse(string.substring(0, string.length - 1));
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  string = string.toUpperCase();
  //BASE 
  //if string is only one character or empty string, return true
  if (string.length === 1 || string === ''){
    return true;
  }
  //if string is two characters, return boolean of strict comparison
  if (string.length === 2) {
    return string.charAt(0) === string.charAt(1);  
  }
  //RECURSION
  // If first and last characters do not match
  if ((string.charAt(0)) !== (string.charAt(string.length - 1))) {  
    //immediately return false
    return false;
  }
  //return function, trimmed to remove any empty space
  return palindrome(string.substring(1, string.length -1).trim()); 
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
// ATTENTION DO NOT LEAVE COMMENTS IN THIS FUNCTION. The test is looking for any ('/').
var multiply = function(x, y) {
  if(x === 0 || y === 0) {
    return 0;
  }
  if (y ===  1) {
    return x;
  }
  if (y === -1) {
    return -x;
  }
  
  if (x > 0 && y > 0) {
   return x + multiply(x, y - 1); 
  }
  else if (x < 0 && y < 0) {
    console.log('iterating');
    return -x - multiply(-x, y + 1);
  }
  else if (x < 0) {
    return x + multiply(x, y - 1);
  }
  else if (y < 0) {
    return -x + multiply(x, y + 1);
  }
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  //base if (str1 === 1 || str2 === 1), return str1 === str2
  if (str1.length === 1 || str2.length === 1) {
    return str1 === str2;
  }
  //if str1 or str2 are an empty string, return true
  if (str1 === '' || str1 === '') {
    return str1 === str2;
  }
  //determine if first element of string is the same value
  if (str1[0] === str2[0]) {
    //if condtion is true return function call, splicing off the remaining string after index 0
    return compareStr(str1.slice(1), str2.slice(1));
  }
  //otherwise, return the boolean false
  else {
    return false;
  }
};
// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str, output = []){
  //base- once array's length equals 1, return array[0];
  if (str === ''){
    return output;
    }
    
    //recursion- push str[0] into output, then return the function with str.slice(1)
    output.push(str[0]);
    createArray(str.slice(1), output)
    return output;
  };
// 17. Reverse the order of an array
var reverseArr = function (array, output = []) {
   //base- once array's length equals 1, return array[0];
   if (array.length === 1){
    return output.unshift(array[0]);
    }
    
    //recursion- push str[0] into output, then return the function with str.slice(1)
    output.unshift(array[0]);
    reverseArr(array.slice(1), output);
    return output;
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length, output = []) {
  //base - once output length is equal to length.length, return output
  if (output.length === length) {
    return output;
  }

  //recurssion- push value into length, calls builtList, then return output
  output.push(value);
  buildList(value, length, output);
  return output;
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value, count = 0) {
  if (array.length === 0) {
    return count; 
   }
   /*recurrsion- determine if array[0] equals value
   , if so add 1 to count, then call function with first value of array */
   
   if (array[0] === value){
     console.log('iterating');
     count++;
     return countOccurrence(array.splice(1), value, count)
   }
   else{
   return countOccurrence(array.splice(1), value, count); 
   }
 };

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback, newArray = []) {
  
  //base- if array length is equal to zero, return, 
  if (array.length === 1) {
    return newArray.push(callback(array[0]));
  }
  /*recurssion- push value method to add callback function value using array[0] as an argument into output,
   then call countOccurrence function, removing array[i] (array.splice(1), value ouput)*/
   newArray.push(callback(array[0]));
   rMap(array.slice(1), callback, newArray);
   return newArray;

};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {

};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n, fib = []) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]

// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n, fib = [0, 1,]) {
  //create a fib parameter that has a default value of [0, 1]

  //during each function call, push value into fib 
  //that is the sum of the current index and previous index
  fib.push(fib[fib.length - 1] + fib[fib.length - 2])
  
  //BASE
  //if n === 0, return fib[0];
  if (n === 0) {
    return fib[0];
  }
  //else if n is less than 0, return null
  else if (n < 0) {
    return null;
  }
  
  //RECURSION
  //using n as a counter,return function with n - 1
  //which will end at base cases until it meets base value
  if (n > 0){
    return nthFibo(n - 1, fib.slice(1));
  }
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input, output = []) {
   //if input's length is 1, return input[0]
   if (input.length === 1){
    return output.push((input[0].toUpperCase()));
  } 
  //reccursion
  //push first index of input into output
  output.push(input[0].toUpperCase()); 
  
  capitalizeWords(input.splice(1), output)
  //call capitalizeWords function with first index of input removed and the updated output
  return output;  
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array, output = []) {
  array[0] = array[0].substring(1, 0).toUpperCase() +  array[0].substring(1);
  //if input's length is 1, return input[0]
    if (array.length === 1) {
      return output.push(array[0]);
    } 
    //reccursion
    //push first index of input into output
    output.push(array[0]); 
    capitalizeFirst(array.splice(1), output);
    //call capitalizeWords function with first index of input removed and the updated output
    return output;  
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj = {}) {
    console.log(str); 
    //base
    //if str === '', return obj
    if (str.length === 0) {
      return obj;
    }
    //recursion
    //using Object.keys(), determine if str[0] key already exists in obj 
    if (Object.hasOwn(obj, str[0]) === false) {
      //declare str[0] key to the initial value of 1
      obj[str[0]] = 1;
      return letterTally(str.substring(1), obj);
    }
    else if (Object.hasOwn(obj, str[0]) === true) {
      //add 1 to the str[0]
      obj[str[0]] += 1;
      return letterTally(str.substring(1), obj);
    }
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list, result = []) {
  //BASE
  //if list.length === 0, return list
  if (list.length === 0) {
    return result;
  }
  //RECURSION
  //if the first element matches it's next element
  if (list[0] === list[1]){
    //use splice to return compress(list) with first index value removed
    // result.push(list[1]);
    return compress(list.slice(1), result);
  }
  else {
    result.push(list[0]);
    return compress(list.slice(1), result);
  }
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array, result = []) {
    //BASE 
  //if array.length === 0, return result
  if (array.length === 0) {
    return result;
  }
  
  //RECURSION
  //if the first element matches it's next element
  if (array[0] === 0 && array[1] === 0){
    /*use splice to return compress(array.slice(1))
    with first index value removed*/ 
    return minimizeZeroes(array.slice(1), result);
  }
  else {
    result.push(array[0]);
    return minimizeZeroes(array.slice(1), result);
  }
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array, result = []) {
    
  //BASE
  //if array length is equal to 0, return result
  if (array.length === 0) {
    return result;
  }
  //remove first array value if array[0] equals zero
  if (array[0] === 0) {
    return alternateSign(array.slice(1), result);
  }
  
  //RECURSION
  //if result.length / 2 does not have a remainder:
  if (result.length % 2 === 0) {
    // 1a. if array[0] is less than 0,
    // push negative array[0] into result
    if (array[0] < 0) {
      result.push(-(array[0]));
    }
    // 1b. else if array[0] is greater than 0, return
    // push original value of array[0] into result
    else if (array[0] > 0) {
      result.push(array[0]);
     // 2. return function, slicing out the first value of array
     
    }
    return alternateSign(array.slice(1), result);
  }
 
  // else if result.length / 2 has a remainder:
  else if (result.length / 2 !== 0) {
    // 1a. if array[0] is less than 0,
    // push original value into result
    if (array[0] < 0) {
      result.push(array[0]);
    }
    // 1b. else if array[0] is greater than zero,
    // push negative array[0] into result
    else if (result.length / 2 > 0) {
      result.push(-(array[0]));      
    } 
  }
  return alternateSign(array.slice(1), result);

};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str, newArray = str.split(' '), output = []) {
  //create object that references all 
  //one digit string number values to its text form
  var textForm = {
    '0': 'zero',
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine'
  };
  
  //BASE
  //if newArray length is 0, return joined output with spaces (this will convert array into a single string)
  if (newArray.length === 0){
    return output.join(' ');
  }
  
  //RECURSION
  //if str[0] is a number of a number, return 
  //number value referencing number as index of    //textForm
  if (textForm.hasOwnProperty(newArray[0]) === true) {
    //push textForm[newArray[0]]
    output.push(textForm[newArray[0]]);
    //return called function without first value     //newArray, using slice method
    return numToText(str, newArray.splice(1), output);
  }
  //else newString[0] is not the string of a number,     //push value into ouput array
  else {
    output.push(newArray[0]);
    //return called function without newString[0] 
    //using slice method
    return numToText(str, newArray.splice(1), output);
  }  
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {

};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
