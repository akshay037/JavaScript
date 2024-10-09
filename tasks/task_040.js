// JavaScript Program to Count the Number of Vowels in a String

function countVowel(str) {

    const count = str.match(/[aeiou]/gi).length;

    return count;
}

const string = prompt('Enter a string: ');

const result = countVowel(string);

console.log(result);