let val = 10;
function tester(val) {
    val += 10;
    if (val < 100) {
        return tester(val);
    }
    return val;
}
tester(val);
console.log(val);