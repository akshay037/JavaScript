let arr = ["squirrel", 5, "Tjed", new Date(), true];
function checkString(element, index) {
    return typeof element === "string";
}
let filterArr = arr.filter(checkString);
console.log(filterArr);
