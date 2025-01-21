const transactions = [-1000, 3000, -4000, -2000, 6000, -5000]

let resultSome = transactions.some(item => {
    return item > 0
})

console.log(resultSome)

let resultEvery = transactions.every(item => {
    return item > 0
})

console.log(resultEvery)