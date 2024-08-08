//------------------------------------------------------------------------------------------------------------------------------------------


// x is called a callback
// demo is called a higher order function

function demo(x) {
    console.log(x)

}

function test() {
    console.log("Test function call")
}

demo(test)

//------------------------------------------------------------------------------------------------------------------------------------------

function demo1(arg) {
    console.log(arg)
    return function () {
        console.log("anonymous function")
    }
}
function test1() {
    console.log("test function")
    return 100
}
demo1(test1)

const result = demo1(test1)
console.log(result)
const x = result()
result()

