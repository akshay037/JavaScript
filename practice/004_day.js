
const largestEven = () => {
    let large = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0 && arr[i] > large) {
            large = arr[i]
        }
    }
    return large

}
console.log(largestEven())