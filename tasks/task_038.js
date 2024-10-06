// JavaScript Program to Check the Number of Occurrences of a Character in the String

function countString(str, letter) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {

        if (str.charAt(i) == letter) {
            count += 1;
        }
    }
    return count;
}

const string = prompt('Enter a string: ');
const letterToCheck = prompt('Enter a letter to check: ');

const result = countString(string, letterToCheck);
console.log(result);