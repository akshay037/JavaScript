// Arrays

const fruits = ['orange', 'apple', 'grapes', 'pineapple', 'guava',];
const mixed = ['tony', 'elroy', 'aditya', 'manas', 98, 87, 34, 67];

console.log(fruits);
console.log(mixed);

let x = [10, "hello"]
//         0     1        index number starts with zero

console.log(x);
console.table(x);
console.log(x.length);
console.log(x[0]);
console.log(x[1]);
x[2] = "dell"
x[3] = "apple"
x.length = 0 //to delete all value of array
console.log(x);


const marks = new Array(34, 213, 24, 927, 79, 235);

console.log(marks.length);
console.log(Array.isArray(marks));
console.log(Array.isArray('marks'));
marks[0] = 'Howard';
console.log(marks);
let arrelement = marks[0];
console.log('element :', arrelement)


// Modifying array's methods

//insert

// arr_name.push()                          // to add value to end
// arr_name.unshift()                       // add to the begning

//delete

// arr_name.pop()                           //remove from end
// arr_name.shift()                         //remove from start

//insert and delte splice

// arr_name.splice(0,1)                     //it is for delete value - 0 is index number and 1 is the element to delete
// arr_name.splice(2,0,"msi")               // it is for insert value - 2 is index number 0 is the element to delete "msi" shows the add value

// const result = arr.slice(1, 2)           // ek index number pasun dusary index number parent jato pn delete krt nahi first index number retrun krto // Selects a part of an array, and returns the new array
// arr_name.reverse()                       // Reverses the order of the elements in an array

// console.log(result);

const marks1 = [64, 23, 34, 97, 79, 55];
console.log(marks1);
let value = marks1.indexOf(34);
console.log(value);

marks1.push(35)
marks1.unshift(35)
marks1.pop(55)
marks1.shift(55)
marks1.splice(1, 2)
marks1.slice(1, 2)
marks1.reverse()
// let marks3 = [84,48];
// marks1 = marks1.concat(marks3);
console.log(marks1);