class Dog {
    constructor(dogName, weight, color, breed) {
        this.dogName = dogName;
        this.weight = weight;
        this.color = color;
        this.breed = breed;
    }
}
let dog = new Dog("JavaScript", 2.4, "brown", "chihuahua")


console.log(dog.dogName, "is a", dog.breed, "and weighs", dog.weight,
    "kg.");