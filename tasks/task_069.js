// JavaScript Program to Insert Item in an Array

function insertElement() {
    let array = [1, 2, 3, 4, 5];

    // index to add to
    let index = 3;

    // element that you want to add
    let element = 8;

    array.splice(index, 0, element);
    console.log(array);
}

insertElement();