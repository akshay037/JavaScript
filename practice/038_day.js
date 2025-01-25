function front_back(str) {
    first = str.substring(0, 1)
    return first + str + first
}
console.log(front_back('a'))
console.log(front_back('ab'))
console.log(front_back('abc'))