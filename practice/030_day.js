
let squareFn = (n) => {
    if ((n ** n) % 2 === 0) {
        console.log(`${n} is even`)
    }
    else {
        console.log(`${n} is odd`)
    }
}

squareFn(5)
squareFn(4)
squareFn(7)



let arr1 = [1, 2, 3, 4, 5]

let squareFn1 = (n) => {
    let squareArr = []
    for (let i = 0; i < n.length; i++) {
        let square = (n[i] * n[i])
        squareArr.push(square)
        console.log(square, squareArr);
    }
    return squareArr
}
result = (squareFn1(arr1))
console.log(result)
