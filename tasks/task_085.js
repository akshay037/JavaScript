// JavaScript Program to Set a Default Parameter Value For a Function

function sum(x = 3, y = 5) {

    // return sum
    return x + y;
}

console.log(sum(5, 15));
console.log(sum(7));
console.log(sum());