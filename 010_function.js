function text(i, j) {     //argument   
    console.log("hello", i, j);
    return i * j
}

function demo(i, j) {
    return i
}


const w = text(5, 3) + text(2, 2)              //parameter
let p = demo(10)
let q = demo(2)

//------------------------------------------------------------------------------------------------------------------------------------------


const x = text((10), demo(2))
console.log(x);

function test(x, y) {
    return x > y ? x : y
}
let z = test(10, 20)
console.log(z)


function test2(arg) {
    return demo(arg)
}
function demo(arg) {
    return "dell"
}
let result = test2(10)
console.log(result)