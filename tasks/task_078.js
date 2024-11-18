// JavaScript Program to Extract Given Property Values from Objects as Array

function extractValue(arr, prop) {

    // extract value from property
    let extractedValue = arr.map(item => item[prop]);

    return extractedValue;

}

const objArray = [{ a: 1, b: 2 }, { a: 4, b: 5 }, { a: 8, b: 9 }];

// passing an array of objects and property 'a' to extract
const result = extractValue(objArray, 'a');
console.log(result);