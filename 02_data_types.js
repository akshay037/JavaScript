//Primitive data types :- String, Number, Boolean, Null, Undefine and Symbol

// String
let firstName = 'Arjun';
console.log('This is my name ' + firstName);
console.log('Data type is ' + (typeof firstName));

const middleName = "Valmiki"
console.log("This is my father name " + middleName);
console.log("Data type is " + (typeof middleName));

const lastName = `Allu`
console.log("This is my father name " + middleName);
console.log("Data type is " + (typeof middleName));

// Number
let marks = 68;
console.log('I got ' + marks + ' marks');
console.log('Data type is ' + (typeof marks));

// Boolean
let isDriver = true;
console.log('Data type is ' + (typeof isDriver));

// Null
const nullVar = null;
console.log('Data type is ' + (typeof nullVar));

// Undefine
let undef = undefined;
console.log('Data type is ' + (typeof undef));

// Reference data types
// Array
let myarr = [1, 2, 3, 4, false, 'Buntu'];
console.log('Data type is ' + (typeof myarr));

// Object literals
let percentage = {
    Harry: 89,
    Hermiony: 95,
    Ronald: 60
}
console.log('Data type is ' + (typeof percentage));

// Function
function findName() {

}
console.log('Data type is ' + (typeof findName));
