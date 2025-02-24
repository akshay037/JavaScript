class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    greet() {
        console.log("Hi there! I'm", this.firstname);
    }
}


let p = new Person("Maaike", "van Putten");
p.greet();