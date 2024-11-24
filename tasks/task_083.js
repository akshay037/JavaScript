// JavaScript Program to Get File Extension

function getFileExtension(filename) {

    // get file extension
    const extension = filename.split('.').pop();
    return extension;
}

// passing the filename
const result1 = getFileExtension('module.js');
console.log(result1);

const result2 = getFileExtension('module.txt');
console.log(result2);