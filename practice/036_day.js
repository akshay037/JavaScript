function front_back3(str) {
    if (str.length >= 3) {
        str_len = 3

        back = str.substring(str.length - 3)
        return back + str + back
    }
    else
        return false
}
console.log(front_back3("abc"))
console.log(front_back3("ab"))
console.log(front_back3("abcd"))