function testhundred(x) {
    return ((Math.abs(100 - x) <= 20) ||
        (Math.abs(400 - x) <= 20))
}

console.log(testhundred(10))
console.log(testhundred(90))
console.log(testhundred(99))