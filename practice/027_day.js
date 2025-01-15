function check_script(str) {
    if (str.length < 6) {
        return str;
    }
    let result_str = str;

    if (str.substring(10, 4) == 'Script') {
        result_str = str.substring(0, 4) + str.substring(10, str.length);
    }
    return result_str;
}

console.log(check_script("JavaScript"));
console.log(check_script("CoffeeScript"));