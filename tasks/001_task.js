// Get count of dell brand how many times is got repeated

const arr = ["dell", "hp", "apple", "hp", "hp", "apple", "dell", "hp", "apple", "hp", "hp", "apple", "msi"]

const getCount = arg => {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arg) {
            count++
        }
    }
    return count
}
console.log(getCount("dell"))

//------------------------------------------------------------------------------------------------------------------------------------------

// Get count of each brand 

const brands = ["dell", "hp", "apple", "hp", "hp", "apple", "dell", "hp", "apple", "hp", "hp", "apple", "msi"]

const getAllCount = () => {
    const obj = {}
    for (let i = 0; i < brands.length; i++) {
        // (obj[brands[i]]) ? (obj[brands[i]])++ : (obj[brands[i]]) =1
        if (obj[brands[i]]) {
            obj[brands[i]]++
        } else {
            obj[brands[i]] = 1
        }
    }
    return obj
}
console.log(getAllCount())
getAllCount()

