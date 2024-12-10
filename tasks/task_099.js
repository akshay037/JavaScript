// JavaScript Program to Pass a Function as Parameter

function greet() {
    return 'Hello';
}

// passing function greet() as a parameter
function name(user, func) {

    // accessing passed function
    const message = func();

    console.log(`${message} ${user}`);
}

name('John', greet);
name('Jack', greet);
name('Sara', greet);