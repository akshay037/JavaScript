// JavaScript Program to Find LCM

const num1 = prompt('Enter a first positive integer: ');
const num2 = prompt('Enter a second positive integer: ');

let min = (num1 > num2) ? num1 : num2;

while (true) {
    if (min % num1 == 0 && min % num2 == 0) {
        console.log(`The LCM of ${num1} and ${num2} is ${min}`);
        break;
    }
    min++;
}