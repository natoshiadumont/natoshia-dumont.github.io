//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//const { join } = require("lodash");

function objectValues(object) {
return Object.values(object);
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
return (Object.keys(object)).join(' ');

}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(obj) {
var result = '';
  for (var key in obj){
    if (typeof obj[key] === 'string') {
     result +=  obj[key] + ' '; 
    } 
} 
  return result.trim();
}





//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
if (Array.isArray(collection)) {
    return 'array';
} else if (typeof collection === 'object') {
    return 'object';
}
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(str) {
 //create variable named capWord with initial value of empty string
 var capWord = '';
/*assign value of capWord to str[0].toUpperCase() 
 (+) str.substring(1, str.length)
 */
 capWord = str[0].toUpperCase() + str.substring(1, str.length); 
 //return capWord
 return capWord;
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(str) {
  /*assign initial value of var strArr the str  into an array str's stubsrtings using the .split() method */
  var strArr = str.split(' ');
  //create var result with value of an empty string
 var capAll = '';
  //using a for loop, iterare through the values of each string in strArr
  for (var i = 0; i < strArr.length; i++) {
    //capitalize str[i] and += into capAll string
    capAll += (strArr[i][0]).toUpperCase() + strArr[i].substring(1, strArr[i].length) + ' ';  
  } 
  //return capAll.trim()
  return capAll.trim();
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
//create an empty string assigned to 
var message = '';
message ='Welcome ' + object.name[0].toUpperCase() + object.name.substring(1, object.name.length) + '!';
return message;
// 
}
//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
//create an empty string named profMessage
   var profMess = '';
    /*assign the value of profMess to equal the following message: 
    'object.name with first character capitalized 
    + ' is a ' + object.species with first char capitalize */
    profMessage = object.name[0].toUpperCase() + object.name.substring(1, object.name.length) + ' is a ' + object.species[0].toUpperCase() + object.species.substring(1, object.species.length);
    //return proMess
    return profMessage;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
var message = '';
//create an empty string named message
  var message = '';
    /*create following condtional statments w/ code blocks:
    If object does not have a noise key or if its the value of       an empty
    array, return message there are no noises AND return             message*/
    if (!object.noises || object.noises.length === 0) {
      message = 'there are no noises';
      return message;
    }
    else if (object.noises) {
      for (var i = 0; i < object.noises.length; i++) {
        message += object.noises[i] + ' ';
      }return message.trim();
    }
    }

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
//declare an empty array called splitStr
  var splitStr = [];
  //using .split method, turn single string into an array of 
    //substrings
  splitStr = string.split(' ');
  console.log(splitStr); //should return an array of substrings
  //declare a variable named result
  var result;
  //use a for loop to iterate over splitStr array
  for (var i = 0; i < splitStr.length; i++) {
    //create a condtional statment checking if string[i] matches word str
    if (splitStr[i].toLowerCase() === word.toLowerCase()) {
      result = true;
      return result;
    } else {
      result = false;
    } 
  }return false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
//use .push() method to push value of name string into the object.friends array
  object.friends.push(name);
  //return the entire object
  return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
        // a conditonal statement to check if object is NOT undefined and object.friends DOES NOT have a length of zero
        if (Object.keys(object).length !== 0 && object.friends.length !== 0) {

            //use a for loop to iterate over the object.friends array
            for (var i = 0; i < object.friends.length; i++) {
                //create a conditional statment that if object[i] === name, return result = true
                if (object.friends[i].toUpperCase() === name.toUpperCase()) {
                    return true;
                }
            }     
            
        }
        //otherwise, return false
        return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
 //create a variable of possibleFriends as an empty array
  var possibleFriends = [];
  //create a variable named missing assigned to an empty array.
  var alreadyFriends = [];
  //iterate through array[key] with for in loop to push values of names that are 
  //NOT equal to the given name
  for (var key in array) {
    
    if (array[key].name === name) {
      //push key values into possibleFriends Array 
      alreadyFriends = array[key].friends;
    }  
    //esle if array[key].name !== name
    else if (array[key].name !== name) {
      //push key values into possibleFriends array
      possibleFriends.push(array[key].name);
    }
  }

  //create variable named notFriends with the value comparing the difference
  //between possibleFriends and alreadyFriends
  var notFriends = possibleFriends.filter(x => !alreadyFriends.includes(x));
  //return the value of notFriends
  return notFriends;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, testKey, value) {
    //make a for-in loop iterating over keys in object
    for (var key in object) {
      //create if statment for if key already exists in array
      if (key === testKey) {
        //replace the matching object key's value with the testKey
        object[key] = value;
      }
      //create if statme to test if key exists in object
      if (!(testKey in object)) {
        object[testKey] = value;
      }
    } 
    return object;
    //function named change value that changes a given value 
    //if key exists in the object
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    //make a for-in loop iterating over keys in object
    for (var key in object) {
      //iterate through array values w/ for loop
      for (var i = 0; i < array.length; i++) {
        //create if statment to test if array[i]//=== key
        if (array[i] === key); {
          //delete the given key property
          delete object[(array[i])];
        }
        
      }
      
    }
    //create a for loop
   
    return object;
  }

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
  //create an empty array named arrDedup; 
  var arrDedup = [];
  //assign the value of new Set to create new array only returning unique values from array
  arrDedup = [...new Set (array)];
  return arrDedup;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}