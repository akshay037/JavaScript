function numbers_ranges(x, y) {
    if ((x >= 40 && x <= 60 && y >= 40 && y <= 60)
        ||
        (x >= 70 && x <= 100 && y >= 70 && y <= 100)) {
        return true
    }
    else {
        return false
    }
}

console.log(numbers_ranges(44, 56))
console.log(numbers_ranges(70, 95))
console.log(numbers_ranges(50, 89))