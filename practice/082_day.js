function test(a, b, c) {
    console.log("first:", a, arguments[0]);
    console.log("second:", b, arguments[1]);
    console.log("third:", c, arguments[2]);
}
test("fun", "js", "secrets")


function test1(a, b, c) {
    a = "nice";
    arguments[1] = "JavaScript";
    console.log("first:", a, arguments[0]);
    console.log("second:", b, arguments[1]);
    console.log("third:", c, arguments[2]);
}
test1("fun", "js", "secrets")