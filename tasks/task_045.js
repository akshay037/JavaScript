// JavaScript Program to Loop Through an Object

const student = {
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
};

for (let key in student) {
    let value;

    value = student[key];

    console.log(key + " - " + value);
} 