const arr2 = [101, 62, 131, 40, 115, 65, 78]

largest = (arg1) => {
    let num = 0
    for (let i = 0; i < arg1.length; i++) {
        if (arg1[i] > num) {
            // num = arg1[i]
            num = arg1[i]
        }
    }
    return num
}
const result = largest(arr2)
console.log(result)
