const transacion = [1000, 2000, 3000, -4000, 5000]

const inrToDoller = 80

const converstion = transacion.map(money => {
    return money / inrToDoller
})
console.log(converstion)


let firstWithdrawl = transacion.find(money => {
    return money < 0
})
console.log(firstWithdrawl)



let firstWithdrawlIndex = transacion.findIndex(money => {
    return money < 0
})
console.log(firstWithdrawlIndex)

