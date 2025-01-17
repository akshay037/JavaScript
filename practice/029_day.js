let arr = ["i", "am", "Ironman"]

let [a, b, c] = arr

console.log(c)

let myObj = {
    name: "Tony",
    age: 25,
    gender: "M",
    address: {
        country: "England",
        city: "London"
    }
}

let { name: n, age, gender, address: { city, country } } = myObj

console.log(myObj);
console.log(myObj.age);
console.log(n);
console.log(age);
console.log(gender);
console.log(country);
