// Objects

let myobj = {
    names: 'Tony',
    isActive: true,
    marks: [26, 78, 96, 86, 75]
}
console.log(myobj);
console.log(myobj.isActive);
console.log(myobj['names']);
console.log(myobj.marks);
console.log(myobj.marks[1]);
console.log(myobj.marks[3]);

//------------------------------------------------------------------------------------------------------------------------------------------ 

const obj = {
    brand: "dell",
    country: "usa"
}
console.log(obj)
console.log(obj.brand)

console.log(obj)
obj.brand = "lenovo"
console.log(obj)

const x = "country"
obj.country
//obj.x
obj[x] = "china"
console.log(obj)


//------------------------------------------------------------------------------------------------------------------------------------------


const j = { name: "john", age: 20 }
const k = { name: "ross", age: 21 }
const arr1 = [j, k]

console.log(arr1[1].name)


//------------------------------------------------------------------------------------------------------------------------------------------

const obj1 = {
    brand: "dell",
    country: "usa"
}

const arr = ["aa", 5, true, obj1]
console.log(arr)

console.log(arr[0])
console.log(arr[3])
console.log(arr[3].country)


