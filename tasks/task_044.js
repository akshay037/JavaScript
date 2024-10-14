// JavaScript Program to Clone a JS Object

const person = {
    name: 'John',
    age: 21,
}

const clonePerson = Object.assign({}, person);

console.log(clonePerson);

clonePerson.name = 'Peter';

console.log(clonePerson.name);
console.log(person.name);