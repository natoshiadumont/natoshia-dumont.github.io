// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {

    //assign a variable contact to an object literal; this will be used to contain the contact objects
    var contact = {};
    //using dot notation, add id parameter to the contact object
    contact.id = id;
    //using dot notations, add nameFirst to the contact object
    contact.nameFirst = nameFirst;
    //using dot notaiont, add nameLast parameter to the contact object
    contact.nameLast = nameLast;
    

        //return the contact object
        return contact 
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
                /*2. addContact(contact): takes a contact object to be added to the 
        *         contact-list.
        *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
        *         returns the contact object if found in the contacts-list, or, 
        *         undefined if the fullName does not match any contacts in the list.
        *      4. removeContact(contact): takes a contact object to be removed from 
        *         the contact-list.
        *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
        *         return a String formated with all the full-names of the separated 
        *         with a line-break.*/
        //implementd an addContact function that takes parameter of contact
        addContact: function(newContact) {
            //use push methood to return newContact to the contacts array
           return contacts.push(newContact);
        },
        //create a function named findContact with a parameter for full name (will enter in a fullName string)
        findContact: function(fullName) {
            //use a for loop to iterate through the entire array of object
                //create a 

            for (var i = 0; i < contacts.length; i++) {
                //create a string of firstName and lastName property of the contacts object, named firstLast
                let firstLast = contacts[i]['nameFirst'] + ' ' + contacts[i]['nameLast'];
                //make a condtional statement testing if firstLast strictly equals fullName
                if (fullName === firstLast) {
                //if true, return the object of contacts[i] 
                    return contacts[i];   
                }
            }
            //if false, return the value undefined.
            return undefined;
        },
        removeContact: function(contact) {
            
        },

    }
}




// YOUR CODE GOES ABOVE HERE //



// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
