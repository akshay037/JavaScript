// JavaScript Program to Append an Object to An Array

function insertObject(arr, obj) {
    // append object
    arr.push(obj);
    console.log(arr);
}

// original array
let array = [1, 2, 3];

// object to add
let object = { x: 12, y: 8 };

// call the function
insertObject(array, object);