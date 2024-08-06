//Diffrente types of loops

// For 
for (let i = 1; i < 5; i++) {
    console.log(i);
}

const arr = [10, 20, 30]

for (let i = 0; i < arr.length; i++) {
    console.log(i);
    console.log(arr[i] ** 2);
}

// While
let loop = 0;
while (loop < 5) {
    loop++;
    console.log(loop)
}

// Do-while
let iterator = 0;
do {
    iterator++;
    console.log(iterator);
}
while (iterator < 5)


// Break

let X = 0;
do {
    console.log(X + 1);
    if (X === 5) {
        break;
    }
    X += 1;
}
while (X < 10);

console.log('Done')



// For....In
const arr1 = [3, 5, 7];
arr.foo = 'hello';
for (let j in arr1) {
    console.log(j)
}


let obj = {
    names: "Tony",
    age: "28",
    sex: "Male",
    Power: "Ironman suit, Friday OS",
}
for (let key in obj) {
    console.log(`The ${key} of object is ${obj[key]}`)
}


// For....Of
const arra = [3, 5, 7];
arra.fooo = 'hello';
for (let k in arra) {
    console.log(k)
}



//for each
let arr5 = [41, 48, 34, 65, 67]
arr5.forEach(function (element, index) {
    console.log(element, index)
});
console.log(arr5)




//------------------------------------------------------------------------------------------------------------------------------------------


const num = [10, 20, 30]
for (let i = 0; i < num.length; i++) {
    console.log(num[i])
}
//OR
for (const i of num) {
    console.log(i)
}


//------------------------------------------------------------------------------------------------------------------------------------------

const brands = ["dell", "hp", "apple"]

printArray = () => {
    for (let i = 0; i < brands.length; i++) {
        console.log(brands[i])
    }
}
printArray(brands)



//------------------------------------------------------------------------------------------------------------------------------------------



const computer = {
    processor: "i7",
    ram: "16gb",
    ssd: "256gb",
    graphics: "4090"
}

for (const key in computer) {
    console.log(key)
    console.log(computer[key])

}

