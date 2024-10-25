// JavaScript Program to Check Whether a String Contains a Substring

const str = prompt('Enter a string:');
const checkString = prompt('Enter a string that you want to check:');

if (str.includes(checkString)) {
    console.log(`The string contains ${checkString}`);
} else {
    console.log(`The string does not contain ${checkString}`);
}