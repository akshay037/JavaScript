const arr = ["dell", "hp", "apple"]

const find = arg => {
    // let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arg) {
            return true
        }
    }
    return false
}

console.log(find("msi"))
console.log(find("dell"))

//----------------------------------------------------------------------------------------------------------------------------------------------------------------

const findIndex = arg => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arg) {
            return i
        }
    }
    return -1
}

console.log(findIndex("msi"))
console.log(findIndex("apple"))
console.log(findIndex("dell"))

//----------------------------------------------------------------------------------------------------------------------------------------------------------------

const num = [5, 10, 20, 30, 40, 50, 65]

const filter = (n, op) => {
    const result = []
    for (const item of num) {
        if (op === "gt" && item > n) {
            result.push(item)
        }
        if (op === "lt" && item < n) {
            result.push(item)
        }
    }
    return result
}


console.log(filter(15, "gt")) // [20, 30, 40, 50]
console.log(filter(15, "lt")) // [10]
