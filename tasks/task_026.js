// JavaScript Program to Find Sum of Natural Numbers Using Recursion

function sum(num) {
    if (num > 0) {
        return num + sum(num - 1);
    }
    else {
        return num;
    }
}

const number = parseInt(prompt('Enter a positive integer: '));
const result = sum(number);
console.log(`The sum is ${result}`);