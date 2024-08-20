// Rest operator

function testRest(...values) {
    return values;
}
console.log(testRest("Eshaan", "Rahul"))


const sum1 = (...arg) => {
    let n1 = 0
    for (let i = 0; i < arg.length; i++) {
        n1 += arg[i]
    }
    console.log(n1)
}
sum1(10, 20, 30)

// Spread operator

const a = [1, 2, 3]
const b = [4, 5, 6]
console.log(a, b)
const c = [...a, ...b]
console.log(c)


const arr = ["dell", "hp"]
const x = [...arr]  // shalow copy
x[0] = "apple"
console.log(x)
console.log(arr)

