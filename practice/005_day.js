const arg2 = [10, 20, 30, 40]

largest = (arg2) => {
    let num = 0
    for (let i = 0; i < arg2.length; i++) {
        num += arg2[i]
    }
    return num
}
const result = largest(arg2)
console.log(result)


