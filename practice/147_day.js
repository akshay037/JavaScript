// ---------------
// Using search()
// ---------------

var str = "Information Technology & Management";
console.log("Using search(): " + str.search(/Technology/i)); // This method searches a string for a specified value and returns the position of the match

// -----------------
// Using replace()
// -----------------

console.log("Using replace(): " + "12-30-45".replace(/-/g, ":")); // 12:30:45

// ---------------
// Using match()
// ---------------

var re = /\w+\s/g;
var str = "Information Technology & Management";
var arr = str.match(re); // if the match found, return the match as an array
console.log("Using match(): " + arr);

// --------------
// Using exec()
// --------------
// It searches a string for a specified pattern, and returns the found text as an object.

console.log(
  "Using exec(): " + /Technology/.exec("Information Technology & Management")
);

// ---------------
//  Using test()
// ---------------

var str = "Regular Expression in JavaScript";
var patt = new RegExp("in");
var res = patt.test(str); // This method returns true if it finds a match, otherwise it returns false.
console.log("Text found in string? " + res);
