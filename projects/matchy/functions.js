/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */


//declare a function named 'search'
//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

    /*
    *search shoud take a parameter representing an a given array
    *it should also take a parameter representing a string of a 
    name of an amimal to search (craeate a for loop)
    *looks through the 'animals array and returns the animal's object
    IF an animal with that name exists (conditonal statment)
    *returns null if no animals with that name exists 
    (return statement outside of loop)
    */

    function search(animals, str) {
        //create for loop that iterate through the array
        for (var i = 0; i <= animals.length -1; i++) {
        /*create following conditonal statment:
        if str is equal to array[i].name, return ENTIRE the object in that array
        */
            if(animals[i].name.toUpperCase() === str.toUpperCase()) {
            return animals[i];
            }
        } return null;
    }
            
    
// console.log(search(animals, 'jerome')); //should print the skink object in animals
// console.log(search(animals, 'Herbert')); //should print null

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*
-write a function declaration called 'replace' with three parameters:
 animals, a string representing the name of an animal to search
  names, the nameof an animals on which to perform the search
   and replacement, an object that represents the replacement animal
 */
//create a function named replace with parameters, animals, names, and replacement
function replace(animals, name, replacement){
    
      //create for loop that iterate through the array
    for (var i = 0; i <= animals.length -1; i++) {
        /*create following conditonal statment:
        if str is equal to array[i].name, return ENTIRE the object in that array
        */
        if (animals[i].name.toUpperCase() === name.toUpperCase()){
        //if an animal with that name exists within the animals array,
        // replace it's entire Object with the replacement object.array[i]
        animals[i] = replacement;
        }
    }

}

////////////////////////////////////////////////////////////////////
//Step 3 - Remove ///////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
//create a function named remove with animals and name parameters
function remove(animals, name) {
    //create a for loop that iterates through the array
    console.log(animals);
    console.log(animals.length);
    for (var i = 0; i < animals.length; i++) {
        console.log('Indexing', i);
        console.log(animals[i]);
        if (animals[i].name.toUpperCase() === name.toUpperCase()) {
          console.log('It hit!');
          animals.splice(i, 1);  
        }
    }

}
myAnimal = {
    name: 'Keke',
    species: 'Parakeet',
    noises: ['squaking', 'clicking', 'hissing']
}
//console.log(remove(animals, 'Jerome'));//should replace Jerome with myAnimal object


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create a function named add with parameters animals and animal where:
//animals represents the array of animals
//and animal represent sthe new animal you want to add
function add(animals, animal) {
   /*check if animal object, using conditional statmenthas the follow:
        -if animal.name.length > 0 
        &&
        -if animal.species.length > 0
        &&
    */
    if (
        animal.name.length > 0
        && animal.species.length > 0
        && !search(animals, animal.name)  
    ) { 
        /*once if statement is true, push animal object into animals array*/
       console.log('It hit!')
       animals.push(animal);
    }
     
    
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
