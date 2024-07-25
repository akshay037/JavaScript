// Type conversion and type coercion

// Type conversion

// Interger to String
console.log('Welcome to learning')
let myVar;
myVar = String(34);
console.log(myVar, (typeof myVar));

// Boolean to String
let booleanVar = true;
console.log(booleanVar, (typeof booleanVar));

// Date to String
let date = String(new Date());
console.log(date, (typeof date));

// Array to String
let arr = String([1,2,3,4,5]);
console.log(arr.length, (typeof arr));

// String to Number
let stri = Number('3434');
stri = Number(true);
stri = Number(false);
stri = Number([1,2,3,4,5])
stri = Number('34d34');
console.log(stri, (typeof stri));

// Converts the Float number to Number
let number = parseInt ('285.36545');
console.log(number, (typeof number));
console.log(number.toFixed(2), (typeof number));

// Type coercion

let mystr = '896';
let mynum = 64;

console.log(mystr + mynum);