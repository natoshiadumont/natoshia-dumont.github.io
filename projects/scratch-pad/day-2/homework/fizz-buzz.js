// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //

//create a for loop that iterates through the numbers 1-100
for (var i = 1; i <= 100; i++) {
    
/*
wihtin the for loop create the following conditional statments:
-if i % 3  && i % 5 === 0, push string 'FizzBuzz' into numsArr
-else if i % 5 === 0, push string 'Buzz'
-else  if % 3 equals 0, push string 'Fizz' into numsArr
-else, push value of i into nums Arr
*/
if (i % 5 === 0 && i % 3 === 0) {
    console.log('FizzBuzz');
} else if (i % 3 === 0) {
    console.log('Fizz');
} else if (i % 5 === 0) {
    console.log('Buzz');
} else {
    console.log(i);
}
}

    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}