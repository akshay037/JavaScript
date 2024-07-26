const names = "Tony";
const greeting = "Hello";
let food1 = "Burger";
let food2 = "Cold drink";
let mywelcome = `${greeting} ${names} Welcome to my place, would you like to have ${food1} and ${food2}`

console.log(mywelcome);

let tonyInfo;
tonyInfo = "Tony stark is also known as the Ironman. " +
    "Tony has 93 Ironman suits, Prometheum armor (Nano-tech) is the most famous suit. " +
    "Tony stark is too much smarter than other in the Marvel team";
tonyInfo = tonyInfo.concat(" tony is bit rich")
console.log(tonyInfo);
console.log(tonyInfo.length);
console.log(tonyInfo.toLowerCase());
console.log(tonyInfo.toUpperCase());
console.log(tonyInfo[5]);
console.log(tonyInfo.indexOf("stark"));
console.log(tonyInfo.lastIndexOf("stark"));
console.log(tonyInfo.charAt(3));
console.log(tonyInfo.endsWith("rich"));
console.log(tonyInfo.includes("richer"));
console.log(tonyInfo.substring(0, 4));
console.log(tonyInfo.slice(4));
console.log(tonyInfo.split(" "));
console.log(tonyInfo.replace("Tony", "Howard"));