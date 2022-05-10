////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end) {
  // //base- if start and end are the same, return []
  // if (start === end) {
  //   return [];
  // }
  //   //recursion
  //   //create variable result with array literal
  // result.push(start[i]);
  // return result += range(start.slice(1), end);

}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(start, end) {
  //base- if start is equal to end, then return end
  if (start === end) {
    return end;
  }
  //recursion= return result, which will add the value of the previous value to the new value of the function calls
  var result = start[0] + range(start.slice(1), end);
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray() {

}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace() {

}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
  //create rest parameter
  let rest = null;
  for (let i = array.length - 1; i >= 0; i--) {
    
    /*
    reassign rest to an object with a key called value with the value being current item in the array index. 
    the object should hav a key of 'rest' that is assigned the current value of rest
    */
   rest = { value: array[i], rest: rest};
  }
  return rest;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list, arr = []) {
  //base
  if(list.rest === null) {
    arr.push(list.value);
    return arr;
  }
  //recursion
    //add the current value property to arr
    arr.push(list.value);
    return listToArray(list.rest, arr);
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend() {

}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth() {

}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(a, b) {
  if(typeof a !== 'object' && typeof b !== 'object'){
    return a === b;
  }
  if(typeof a !== 'object' || typeof b !== 'object'){
    return false;
  }
  let aKeys = Object.keys(a);
  let bKeys = Object.keys(b);
  if(aKeys.length !== bKeys.length){
    return false;
  }
  for(let i = 0; i < aKeys.length; i++){
    if(!bKeys.includes(aKeys[i]) || !deepEqual(a[aKeys[i]], b[aKeys[i]])){
      return false;
    }
  }
  return true;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
