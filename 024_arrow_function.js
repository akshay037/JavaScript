//Named function
function demo(arg) {
    console.log("test function called", arg)
    return "Hello"
}
demo(50)

//arrow function
const test = arg => {
    console.log("Test function called", arg)
}
test(10)

//arrow function single line return
const test2 = arg => "Hello"
test2(20)

//arrow function for multiple argument
const test1 = (arg, arg1) => {
    console.log("Test function called", arg, arg1)
}
test1(10, 20)


// test = (num) => {
//     console.log(num)
// }
// test(55)
// test = (num) => console.log(num)
// test(55)
// test = num => console.log(num)
// test(55)
// test = num => num
// const result1 = test(55)
// console.log(result1)

square = (arg) => arg ** 2
const result = square(5)
console.log(result)

power = (arg1, arg3) => arg1 ** arg3
const result1 = power(2, 5)
console.log(result1)