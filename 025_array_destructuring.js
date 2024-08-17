const arr = [10, 20]

// let n1 = arr[0]
// let n2 = arr[1]

const [n1, n2] = arr
console.log(n1, n2)

let x = 10, y = 20;
[y, x] = [x, y]
console.log(x, y)




const fn = () => {
    console.log("fn function")
}
const useState = arg => {
    return [arg, fn]
}
const [count, setCount] = useState(10)
setCount() //this line prints console
const result = setCount() //this line print return


