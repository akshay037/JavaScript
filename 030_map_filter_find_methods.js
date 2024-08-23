const arr1 = [50, 100, 150, 200, 250]
const demo = (item) => item === 150
const result1 = arr1.find(demo)
console.log(result1)

// Find and FindIndex using anonymous function

const arr = [10, 20, 30, 40, 50, 60]

// Higher order function 

const x = arr.find(item => item === 20)
const y = arr.findIndex(item => item === 40)

console.log(x)
console.log(y)

// Map function = map returns array only it is use to tranfrom array

const result = arr.map(item => `<h1>${item}</h1>`)
console.log(result)


// Filter function
const small = arr.filter(item => item > 35)
console.log(small)

//------------------------------------------------------------------------------------------------------------------------------------------

const user = [
    { name: "john", city: "london" },
    { name: "ross", city: "usa" },
    { name: "phebs", city: "la" }
]

const r = user.find(item => item.name === "john")
console.log(r)




const arr2 = [10, 20, 30, 40]


// const result2 = arr.find(item => item === 20) // to find something 
// const result2 = arr.findIndex(item => item === 20) // to find Index 
// const result2 = arr.filter(item => item !== 30) // to find filter 


// transform
// const result2 = arr.map(item => item * item)
// const result2 = arr.map(item => `<p>${item} </p>`)
// console.log(result2);

let result2 = arr2.map(i => i + 2)
console.log(result2);