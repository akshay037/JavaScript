const obj = { fname: "john", lname: "doe", city: "london", address: "Karanti chowk" }
// const city = obj.city
// const city = obj.fname
const { city } = obj
const { fname, address = "Fake street", lname: aadnav } = obj
console.log(fname, city)
console.log(address)
console.log(aadnav)
console.log(lname) //error cause lname is renamed as addnav on line number 5





const obj1 = {
    name: "john",
    city: "london",
    mobile: {
        home: 4444,
        office: 5555
    }
}

const { mobile } = obj1


//nested destrcturing 
const { mobile: { home } } = obj1

console.log(home)




const arr = [10, 20, 30]
const obj2 = { name: "john", city: "london" }

const x = [...arr]
const y = { ...obj }

console.log(x)
console.log(y)

const { citys } = obj2

const { citys: rasta } = obj2
