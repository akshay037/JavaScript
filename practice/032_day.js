function hasUniqueCharacters(str) {
    const charSet = new Set(str)
    return charSet.size === str.length
}

const str1 = "abcdefg"
const str2 = "hello"

console.log(hasUniqueCharacters(str1))
console.log(hasUniqueCharacters(str2))


function factorial(n) {
    let result = 1
    for (let i = 2; i <= n; i++) {
        result *= i
    }
    return result;
}

const num = 5
console.log(`The factorial of ${num} is ${factorial(num)}`)

