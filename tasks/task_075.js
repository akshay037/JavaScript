// JavaScript Program to Merge Two Arrays and Remove Duplicate Items

function getUniqueAfterMerge(arr1, arr2) {

    // merge two arrays
    let arr = arr1.concat(arr2);
    let uniqueArr = [];

    // loop through array
    for (let i of arr) {
        if (uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    console.log(uniqueArr);
}

const array1 = [1, 2, 3];
const array2 = [2, 3, 5]

getUniqueAfterMerge(array1, array2);