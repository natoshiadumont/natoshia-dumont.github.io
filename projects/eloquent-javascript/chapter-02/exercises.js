
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(num) {
  //create an empty string named result
  var result = '';
  var counter = 1;
  //make while loop to console.log any number of has tags
  while (counter <= num) {
    console.log(result += '#');
    counter++;
  }
  //return result
  return result;
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz(num ,count) {
  //make a variable num equal to one; declare variable result
  //declare variabel named result
  var result;
  while (num <= count) {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log('fizzbuzz');
    num++;
  }
  else if (num % 3 === 0) {
    console.log('fizz');
    num++;
  }
  else if (num % 5 === 0) {
  console.log('buzz');
    num++;
  } else {
   console.log(num);
    num++;
  }
}
}
////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(num) {
  var size = num;
  var board = '';
 for (var outer = 0; outer < size; outer++) {
   for (var inner = 0; inner < size; inner++) {
    if ((inner + outer) % 2 === 0) {
      board += ' ';
    }
    else {
      board += '#';
    }
   }
   board += '\n';
 }
 console.log(board);
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
