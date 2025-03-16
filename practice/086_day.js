const newStr = JSON.stringify(myList);
const newObj = JSON.parse(newStr);
newObj.forEach((el) => {
    console.log(el);
});