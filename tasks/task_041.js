// JavaScript Program to Remove a Property from an Object

const student = {
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
    greet: function () {
        console.log('Hello everyone.');
    },
    score: {
        maths: 90,
        science: 80
    }
};

delete student.greet;
delete student['score'];

console.log(student);