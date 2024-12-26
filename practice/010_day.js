function reverse(array) {
    var output = [];
    while (array.length) {
        output.push(array.pop());
    }
    return output;
}

console.log(reverse([1, 2, 3, 4, 5, 6, 7]))