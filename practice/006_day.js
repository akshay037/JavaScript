const arr2 = [151, 62, 31, 40, 15, 65, 78]

largest = (arg1) => {
    let num = arg1[0]
    for (let i = 1; i <= arg1.length; i++) {
        if (arg1[i] > num) {
            num = arg1[i]
        }
    }
    return num
}
const result = largest(arr2)
console.log(result)


smallest = (arg1) => {
    let num = arg1[0]
    for (let i = 0; i < arg1.length; i++) {
        if (arg1[i] < num) {
            // num = arg1[i]
            num = arg1[i]
        }
    }
    return num
}
const result1 = smallest(arr2)
console.log(result1)


