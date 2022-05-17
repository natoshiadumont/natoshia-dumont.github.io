/**
 * VARIABLES
 * Variables are named containers with the ability to hold various datatypes in the program's memory
 * As opposed to having to repeat the same number, string, function, etc. you can simply assign it to a name that will reference the variable's given data
 * This drastically reduces the repetition in your code AND allows you to make fewer mistakes!
 * There are two steps when creating a variable: declaration and assignment
 */
 
// 1. Declaration- assigning a unique name to a given container using a KEYWORD.

var myAge;//Example: the 'container' labeled myAge is now stored in the program's memory
console.log(myAge); // since myAge IS declare but has not been assigned anything, it will log as undefined
//2. Assingment- when you have a declared variale and assign data to that container's label

myAge = 29; //Example: now the variable myAge is now assigned to the number value 29
console.log(myAge); //now that we have assigned a variable data (the number 29), it will log 29 to the console.

//Initialization: Initializing a variable is when you are declaring that variable and assigning it a value at the same time.
var havePets = true;// Initalizing allows me to declare a variable havePets and assign it the boolean value of true in the same line of code
//Reassinging: if you want to change the value to which that variable has been assinged, you can REASSIGN IT's VALUE
//EXAMPLE
myAge = 30; //now the value of the myAge variable equals 30! (note that you do not need to use the keyword var to reassing a value because its already declared)
console.log(myAge); //it will now pring the number 30 instead of 29!
/**
 * HOISTING
 * In Javascript, hoisting refers to when your program moves variables and function declarations to the top of the scope BEFORE code exicution
 */
//example: Code that looks like this:
var greeting = 'hello';
console.log(greeting);

//is interpreted like this:
//var greeting; // first, greeting's declaration is hoisted to the top of the program
//greeting = 'hello' //then, greeting has been assigned the string value 'hello'
//console.log(greeting); //finally, the program prints the value of greeting, which is 'hello', to the console.
// It's incredibly important to determine the order of your code as well as what keywords you use when assigning a variable...
/**
 * KEYWORDS
 * in order to declare or initialize a variable, you must use a keyword
 * in the above examples, I used the keyword 'var'
 * However, there are three different keywords that you can use to create a variable: var, let, const
 */

//VAR
// a key word that either function or globally scoped variable to a value
//EXAMPLE 1: using var, the following variable is availale globally, to the entire program
var luckyNumber = 11;
console.log(luckyNumber);//this will log the number 11
//EXAMPLE 2: using var in a function, you will only have access to the variable when calling that given function
function luckyNumPlusOne(number) {
   var result; //result is in the luckyNumPlusOne function's scope!
   result = number + 1;
   return result;
}
console.log(result); //this returns undefined since you can't access this variable outside of the given function
console.log(luckyNumPlusOne(luckyNumber)); // logs the number 12
// this will use the variable luckyNumber (the value 7) and will add one, then return the value of the variable result

//LET
//this keyword fixes a lot of the problems that var may cause in a given program, particulary reducing the chance to unintentionally reassign a variable and it affect your code
//let, unless declared in the global scope, is alway locally scoped (in functions, conditional statments, and in loops)
// EXAMPLE 1
let number = 99;// let has been declared in the global scope of th program
console.log(number)// this will print the number 99, as you can access a let variable in the global scope
//EXAMPLE 2
function printNum() {
   let num = 25
   console.log(num);
}
console.log(num); //I cannot access or use the variable num outside of the function, this will return undefined
//if I want to access it, I have to invoke the printNum function like this:
printNum(); //this will print the value of num which is 35!

//EXAMPLE #
// You can also REASSIGN a variable that has the keyword let.
let message = 'Wait, I can change?';//initalize vary with the keyword let and the initial value of the string 'Wait, I can change?'
console.log(message); //this will print the value of message to the console ('Wait, I can change?')
// now lets try to reassign!Rememer when reassigning a variable, you do not need to use a keyword
message = 'You sure can!';
console.log(vary);// now the variable message has been changed to the string, 'You sure can!'

//CONST
//const is the variable keyword that is locally scoped, similar to let
//However, unlike let, a variable assigned with the const keyword cannot be reasigned
//In other words, this variable value is a CONSTant

//EXAMPLE 1 - Initializing in the global scope
const permanentVal = 100; //the variable permanentVal has be assigned the value of 100 as a constant IN the global scope
console.log(permanentVal);// this will log the num 100 to the console. You can access this constant value globally
//EXAMPLE 2 - CONSt varales are locally scoped
function localVal() {
   const myVal = 10; //myVal was declared with the keyword const in the scope of the funciton localVal
   return myVal;
}
console.log(myVal); //This will throw that myVal is not declared because it only exist in the scope of the localVal function
//I can access its vlaue by calling the function localVal
console.log(localVal());// this will print the value of myVal, which is 10
//EXAMPLE 3- YOU CAN NOT REASSIGN A CONST
//once a constant is declared, it's value can not be reassigned
const isDog = false; //this isDog is assigned
//this means that if we try to reassign isDog, we will not be able to
isDog = true; //unlike the other two keywords, you can't reassign the value when using const as a keyword
//when trying to reassign a variable that has the const keyword, this cause an error telling you that you are trying to reassign a constant variable.


