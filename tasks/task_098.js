// JavaScript Program to Check if a Number is Float or Integer

function checkNumber(x) {

    // check if the passed value is a number
    if (typeof x == 'number' && !isNaN(x)) {

        // check if it is integer
        if (Number.isInteger(x)) {
            console.log(`${x} is integer.`);
        }
        else {
            console.log(`${x} is a float value.`);
        }

    } else {
        console.log(`${x} is not a number`);
    }
}

checkNumber('hello');
checkNumber(44);
checkNumber(3.4);
checkNumber(-3.4);
checkNumber(NaN);