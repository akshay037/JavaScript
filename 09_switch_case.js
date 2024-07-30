// Switch case

const i = 2;

if (i === 1) {
    console.log("mon");
} else if (i === 2) {

    console.log("tue");
} else if (i === 3) {
    console.log("wed");

} else {
    console.log("invalid day");
}

//------------------------------------------------------------------------------------------------------------------------------------------


const age = 18

switch (age) {
    case 18:
        console.log('You are 18');
        break;
    case 25:
        console.log('You are 25');
        break;
    case 34:
        console.log('You are 34');
        break;
    default:
        console.log('You are unknown age');
        break;
}

//------------------------------------------------------------------------------------------------------------------------------------------


switch (3) {
    case 1: console.log("MON"); break;
    case 2: console.log("tue"); break;
    case 3: console.log("wed"); break;
    default: console.log("INVALID DAY");
}

//------------------------------------------------------------------------------------------------------------------------------------------

let p = 10, q = 200, z = 3000

switch (true) {
    case p > q && p > z: console.log("Largest" + p); break
    case q > p && q > z: console.log("Largest" + q); break
    default: console.log("Largest", z);
}


const w = 5

if (w % 3 === 0 && w % 5 === 0) {
    console.log("fizzbuzz")
}
else if (w % 5 === 0) {
    console.log("buzz")

}
else if (w % 3 === 0) {
    console.log("fizz")
}
else {
    console.log(w)
}
