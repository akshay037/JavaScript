// JavaScript Program to Count the Number of Keys/Properties in an Object

const student = {
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
};

let count = 0;

for (let key in student) {
    ++count;
}

console.log(count);