var MYNAMESPACE = MYNAMESPACE || {};

MYNAMESPACE.MessageClass = function (msg) {
  this.value = msg;
  this.getMessage = function () {
    return this.value;
  };
};

var obj = new MYNAMESPACE.MessageClass("Akshay");
console.log("Hello " + obj.getMessage());
