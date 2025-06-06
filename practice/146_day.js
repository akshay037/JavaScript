var Person = {}; //Object creation

var Person = { name: "Pradeep", address: "Bangalore" }; //Object key value pair

console.log("Access Object using key: " + Person.name); //Access Object value using key

var Person = [
  { name: "ABC", address: "INDIA" }, //Array of Objects
  { name: "XYZ", address: "USA" },
  { name: "PQR", address: "UK" },
];

console.log("Name: " + Person[2].name + " and Adress: " + Person[2].address); //Access Object value using key

var CarClass = new Object();
CarClass.company = "Ford";
CarClass.model = "Mustang";
CarClass.year = 1969;

console.log("Car Model: " + CarClass.model);

CarClass["company"] = "Jaguar";
CarClass["model"] = "Jaguar Land Rover";
CarClass["year"] = 1933;

console.log("Car Model: " + CarClass.model);

/**  Multiple ways of creating object in javascript  **/

// ----------------------
// Object() constructor
// ----------------------

// Store an empty Object object in d
var d = new Object();
var d = new Object(null);
var d = new Object(undefined);
console.log("Using Object() constructor: " + typeof d);

// ------------------
// Object.create()
// ------------------
var a = Object.create(null);
console.log("Using Object.create(): " + typeof a);

// ---------------------
// bracket's syntactig
// ---------------------
var b = {};
console.log("Using Bracket: " + typeof b);

// -----------------------
// function constructor
// -----------------------
var Obj = function (name) {
  this.name = name;
};
var c = new Obj("Pradeep");
console.log("Using function constructor: " + c.name);

// --------------------
// ES6 class syntax
// --------------------
class myObject {
  constructor(name) {
    this.name = name;
  }
}
var e = new myObject("Pradeep");
console.log("ES6: " + e.name);

// --------------------
// Singleton pattern
// --------------------
var sp = new (function () {
  this.name = "Pradeep";
})();
console.log("Using Singleton Pattern: " + sp.name);

console.log("Object length: " + Object.length); // 1

/** Object Clone in JS
        Deep copy by performance: ( best to worst )

        1) Reassignment "=" (string arrays, number arrays - only)
        2) Slice (string arrays, number arrays - only)
        3) Concatenation (string arrays, number arrays - only)
        4) Custom function: for-loop or recursive copy
        5) jQuery's $.extend
        6) JSON.parse (string arrays, number arrays, object arrays - only)
        7) Underscore.js's _.clone (string arrays, number arrays - only)
        8) Lo-Dash's _.cloneDeep
    **/

var oldObject = [{ object: "a" }, { object: "b" }];
var newObject = JSON.parse(JSON.stringify(oldObject));
var newObject = Object.assign({}, oldObject);

console.log("Cloned Object: " + newObject[0].object); // a
