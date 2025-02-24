class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    greet() {
        console.log("Hi there!");
    }
    compliment(name, object) {
        return "That's a wonderful " + object + ", " + name;
    }
}

let compliment = p.compliment("Harry", "hat");
console.log(compliment);