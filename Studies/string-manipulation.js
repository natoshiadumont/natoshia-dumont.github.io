/**
 * STRING MANIPULATION
 * As we know, a string is zero or more characters that are written inside a quotes
 * with various operators and methods we can manipulate and/or access string values
 */

//STRING OPERATORS- These operators can be used on string values in order to manipulate them or create a new string value
//EXAMPLES
   //Concatenation operator (+) - put two string values together, return another string that is the union of the two operand strings
      var greeting = 'Welcome to ';
      var place= 'City Hall!';
      console.log(greeting + place); // => 'Welcome to City Hall!'
   
   //Assignment operator (+=) - can be used to concatenate a string's current value with another operand
      var place = 'Disney';
      place += 'land'; //this will add the string land to the end of place's value of 'Disney
      console.log(place); //logs the value Disneyland

//STRING METHODS - methods and properties are available to primitive values to access and manipulate thier values
//remember that primitive values, like strings are immutable, meaning their values can not change
//EXAMPLES
   var pet = 'Scooby';
   //.length() -returns the length of the string (example in STRING PROPERTIES section below)
      console.log(pet.length); //6

   //.slice(startNumber, endNumber) - takes a part of a string and returns that parts as a new string
      console.log(pet.slice(0, 5)); //'Scoob'

   //.split()- converts the string into an array of strings
      console.log(pet.split('')); // ['S', 'c', 'o', 'o', 'b', 'y'];

   //.join() - creates and returns a new string by concatenationg the elements of an array
      var arr = ['h', 'e', 'l', 'l', 'o']
      console.log(arr.join('')); //'hello'

   //.toUpperCase() - a string is converted to upper case
      console.log(('hello').toUpperCase); //'HELLO'

   //.toLowerCase() - a string is converted to lower case
      console.log(('HOWDY').toLowerCase); //'howdy'
   //.concat() - can be used in place of the plus(+) operator to join two or more strings into a new value
      console.log(('Disney').concat('land')); 'Disneyland'

//STRING PROPERTIES - SIMILAR TO AN ARRAY, STRINGS HAVE A LENGTH PROPERTY
// YOU CAN ALSO ACCESS CHARACTERS IN A STRING TO USING THAT CHARACTERS INDEX ([])
//EXAMPLES

   //length - how many characters are in the given string (spaces included)
      var str1 = 'Hello'; 
      console.log(str1.length); //5
      var str2 = 'Hi';
      console.log(str2.length); //2
      var str3 = ' '; //this space between the quotation marks counts as a character
      console.log(str3.length); //1
      var str4 = ''; //this string has no spaces or characters, which makes it an 'empty string'
      console.log(str4.length); //0

   //Accessing a string character using an index ([])- 
   /*you can access the value of a given string based on it index, 
   or position in a string.  The first index of any string (or array) starts at zero (the 0th index) */
   //EXAMPLES
      var message = 'Definitely!';
      console.log(message[0]); // 'D'
      console.log(message(4)); // 'n'



   

