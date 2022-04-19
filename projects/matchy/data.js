/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animal = {};
//use dot notation to give animal a property named 'species' with value of any species
animal.species = 'skink';
//use bracket notation to give animial a property named name with value of animal's name
animal['name'] = 'Wink';
//using either notation, dot, give animal a property called noises with the value of an emty array
animal.noises = [];

console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var noises = [];
//use bracket notation to give noises its first element, a sound your animal makes
noises[0] = 'clicking';
//using an array function, add naother noise to the end of 'noises
noises.push('squeaking');
//use the unshift method to add anoise string tot he benning of the array
noises.unshift('hissing');
//using bracket syntax, add another selemtner to the end of noises.
noises[noises.length] = 'wheezing';

//console the length of 'noises'
console.log(noises.length);
//console the last element of noises wihtout hardcoding the index
console.log(noises[noises.length - 1]);
//console log the entire array
console.log(noises);
//check console on webpage to confirm it is correct: IT'S CORRECT!


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal.noises = noises;
animal.noises[animal.noises.length] = 'oink';
console.log(animal);
/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *Dot and bracket notation
 * 2. What are the different ways of accessing elements on arrays?
 *bracket syntax. You can also use the push, pop, shift, unshift, slice, and splice method
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

//create an empty array named animals
var animals = [];
//push animal object into animals array
animals.push(animal);
//console.log animals array
console.log(animals); //should log added animal object inside animal array
//create a variable called duck and assign to the given data
var duck = {
  species: 'duck', 
  name: 'Jerome', 
  noises: ['quack', 'honk', 'sneeze', 'woosh']}
//push 'duck into 'animals' array
animals.push(duck);
console.log(animals);
/*add two more animal profiles to the animals array
 using the previous steps, pring to check if correct*/
var flamingo = {
  species: 'flamingo', 
  name: 'Lil\'\ Mingo', 
  noises: ['nasal honking', 'grunting', 'growling']
  };
animals.push(flamingo);

console.log(animals);

var pig = {
  species: 'pig', 
  name: 'Gus', 
  noises: ['spuealing', 'grunting', 'growling']
  };
animals.push(pig);
console.log(animals);//should print four different 'animal profiles'
console.log(animals.length);


//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create a data structure that can hold a 'list' of friends in a profile
/*I chose an array because you can access easily maipulate it, 
reference it, AND, it's going to be a collection of single strings,
 not a collection of associated information, so an object won't be necessary */
//create a var named friends and assign it to an empty array
var friends = [];
/*write a function called getRandom that 
takes animals array and return a 
random index of the input array*/
function getRandom(animals){
//returns a random 'index' of the input array
  return Math.floor(Math.random() * 4)
  ;
  }
console.log((getRandom(animals)));
//push the name property of randomized animal into the friends array
friends.push(flamingo['name']);
console.log(friends);
animals[1]['friends'] = friends;
//push the friends property into one of the animals in 'animals' array

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */
/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}