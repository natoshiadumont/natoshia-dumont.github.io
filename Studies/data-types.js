/*
COMPLEX DATA TYPES
-Believe it or not, computers are quite forgetful, and not that smart.
-If you were to just type simple data types such as numbers ()into your code, there are two major issues with that:
Promblem #1: The value of you data will be forgotten by the computer in an instant, almost as soon as you place it into your code!
This problem can be solved by declaring a variable and 
*/
8
true
'Hello, my friend!'
// These three examples of data does almost nothing with their values, and are forgotten immediately by your computer, AND they can't really be referenced at another time.

//The first problem can be solved by declaring a variable and assigning it the value of your data


/*
2. But what about if you have a collection of data that you'd like to list and store in the ocmputer's memory? OR, what if you want to your computer to reference a collection of data associated with one another that you would like to organize?


THIS IS WHERE COMPLEX DATA TYPES COME IN!
There are two main types of complex data: arrays and objects
ARRAY- A collection of listed data types

OBJECTS-A collection of associated data that has key value pairs

once assigned to a variable
*/
var myHobbies = ['swimming', 'reading']; // this is an array of strings that that will be stored with the lable myHobbies. Not only will my computer remember my data, but it's provided a label for it, too. In case I'd like to go back

var myObj = {
  name: 'Natoshia Dumont',//string
  pets: 1,//number
  safeDriver: true, //true
  friends: ['Alisha', 'Susannah'], //arrays
  hobbies: myHobbies, //you can assign references to other complex data
  petProfile: {name: 'Scooby', weight: 8, adorable: true}// you can assign a key the value of another complex datatype!
};
//TRIVIA: You can even store complex data inside other complex data types


//I hope this has show you just how essentential complex data types can be!































