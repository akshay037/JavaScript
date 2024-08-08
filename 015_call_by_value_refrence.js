let x = 20
let y = 10
y = 50
console.log(x)
console.log(y)

const arr = [10, 20]
const newarr = arr
newarr[0] = 55

console.log(arr)
console.log(newarr)

//------------------------------------------------------------------------------------------------------------------------------------------

const obj = { name: "ross", age: 21 }
const user = obj
user.name = "ross"

console.log(user)
console.log(obj)

//------------------------------------------------------------------------------------------------------------------------------------------

function demo() {
    console.log("demo function")
    return "hello"
}
console.log(demo())
// const result = demo()
const result = demo
console.log(result)
result()
demo()


//------------------------------------------------------------------------------------------------------------------------------------------
