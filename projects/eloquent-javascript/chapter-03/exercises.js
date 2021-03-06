////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function min(num1, num2) {
if (num1 < num2){
  return num1;
}
else if (num1 > num2) {
  return num2;
}
else if (num1 === num2) {
  return 0;
}
}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function isEven(number) {
if (number % 2 === 0) {
  return true;
}
else {
  return false;
}
}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countChars(string, char) {
   //assign variable charArray the split values of string
   let charArray = string.split('');
   //declare variable result with value zero
   let result = 0;
   //use for loop to itterate through values in charArray
   for (var i = 0; i < charArray.length; i++) {
     //result += 1 if the iterrated character matches char argument.
     if (charArray[i].toUpperCase() === char.toUpperCase()) {
       result += 1;
     }
   }
   //return the final value of result
   return result;
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

  function countBs(string) {
  //assign variable charArray to the split value of string characters
  let charArray = string.split('');
  // let variable result equal zero
  let result = 0;
  //use for loop to iterate over eachcharacger in charArray
  for (let i = 0; i < charArray.length; i++){
    //determine if the current character is strictly equal to 'B'
    if (charArray[i] === 'B') {
    //if it meets that condtion, add 1 to current value of result  
      result += 1;
    }
  }
  //once the loop ends, return the final value of result.
  return result;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
