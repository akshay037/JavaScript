const arr = []
const obj = {}

const users = [
    {fname:"ross"},
    {fname:"chandler"},
    {fname:"joe"},
]

// const x = [...users] // shalow copy
const x = JSON.parse(JSON.stringify(users)) //deep copy 
x[0].name = "rachel"

console.log(x)
console.log(users)
