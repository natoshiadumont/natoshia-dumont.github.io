// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');
const { filter } = require('lodash');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./natoshia-dumont.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
   //create variable named counter with initial value of zero;
   let counter = 0;
   //using filter, return Number of elements that have the property gender value of 'male'
   filter(array, function(element) {
      if (element.gender === 'male') {
         counter++;
      }
   })
   return counter;
}
console.log(maleCount(customers));
var femaleCount = function(array) {
   //create a variable named counter with initial value of zero
   let counter = 0;
   //using filter, return an array of values that return true if array.gender has a value of 'female'
   filter(array, function(element) {
      if (element.gender === 'female') {
         counter++;
      }
   })
   return counter;
};

var oldestCustomer = function(array) {
   //create variable result that with initial value of empty string
   let result = '';
   //create variable greatesVal that is the greats value of the age property in the array of objects
   let greatestVal = Math.max(...array.map(element => element.age));
  
   //create a for loop that iterates over the array
   for (let index = 0; index < array.length; index++) {
      //determine if the array's age property is equal to the greatestVal
      if(array[index].age === greatestVal) {
         // immediately return result with value of the string  array[i].name
         return result = (array[index].name);
      }
   }
   //return result string
      return result;
};

var youngestCustomer = function(array) {
   //create variable result that with initial value of empty string
   let result = '';
   //create variable greatesVal that is the greats value of the age property in the array of objects
   let lowestVal = Math.min(...array.map(element => element.age));
   //create a for loop that iterates over the array
   for (let index = 0; index < array.length; index++) {
      //determine if the array's age property is equal to the lowestVal
      if(array[index].age === lowestVal) {
         // immediately return result with value of the string  array[i].name
         return result = (array[index].name);
      }
   }
   //return result string
      return result;
}

var averageBalance = function(array) {
   //make variable total with value of 0
   let total = 0;
   //create variable numOfElements length value to determine number of elements in the array
   let numOfElements = array.length;
   //loop through the value of array and access balance in each array
   for (let i = 0; i < array.length; i++) {
      let strToNum = parseInt(array[i].balance.replace(/[$,.]/g, ''));
      total += strToNum;
   }
   let result = total / numOfElements;
   //return final value of total divided by num of elements
   return Math.floor(result) / 100;
}

var firstLetterCount = function(array, letter) {
   //declare variable named count with inital value of zero
   let count = 0;

   //use for loop to iterate through array of objects
   for (let i = 0; i < array.length; i++) {
      //determine if array[i].name[0] is equal to letter (use toUpperCase to be case insensensitive)
      if (array[i].name[0].toUpperCase() === letter.toUpperCase()) {
         count++;
      }
   }
   //return final value of count
   return count;
};

var friendFirstLetterCount = function(array, customer, letter) {
   //create variable count with initial value of 0
   let count = 0;
   //use for loop to iterate through array of objects
   for (let i = 0; i < array.length; i++) {
      //determine if array[i] is equal to letter (use toUpperCase to be case insensensitive)
      if (array[i].name === customer) {
         //loop over array[i] friends
         for (let inner = 0; inner < array[i].friends.length; inner++) {
         if (array[i].friends[inner].name.charAt(0).toUpperCase() === letter.toUpperCase())
         count++;  
         }
         
      }
   }
   //return final value of count
   return count; 
};
  
var friendsCount = function(array, name) {
 //create variable named result with initial value of array literal
 let result = [];

 //loop through the array of object with for loop
 for (let outer = 0; outer < array.length; outer++) {
  //use for loop to loop over values of friends array
  for(let inner = 0; inner < array[outer].friends.length; inner++) {
    if (array[outer].friends[inner].name.includes(name)) {
      result.push(array[outer].name); 
    }
   }
 }
 //return final result array
 return result;
};

var topThreeTags;

var genderCount = function(array) {
   //create an object named genderObj with initial value of an object literal
   let genderObj = {
      male: 0,
      female: 0,
      'non-binary': 0
   };
   //for loop through array
   for (let i = 0; i < array.length; i++) {
      //determine if array[i].gender === male
      if (array[i].gender === 'male') {
         genderObj.male++;
      }
      else if (array[i].gender === 'female') {
         genderObj.female++;
      }
      else {
         genderObj['non-binary']++;
      }
   }
   console.log(genderObj);
   return genderObj;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
