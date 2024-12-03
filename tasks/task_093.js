// JavaScript Program to Pass Parameter to a setTimeout() Function

function greet() {
    console.log('Hello world');
}

// passing parameter
setTimeout(greet, 3000);
console.log('This message is shown first');