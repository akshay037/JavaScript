// JavaScript Program to Swap Two Variables

let num1 = prompt('Enter the first variable: ');
let num2 = prompt('Enter the second variable: ');
let temp;

temp = num1;
num1 = num2;
num2 = temp;

console.log(`The value of a after swapping: ${num1}`);
console.log(`The value of b after swapping: ${num2}`);


//JavaScript program to swap two variables

let a = prompt('Enter the first variable: ');
let b = prompt('Enter the second variable: ');

[a, b] = [b, a];

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);