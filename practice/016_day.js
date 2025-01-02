const employeeData = {
    name: "kate",
    email: "john@gmail.com",
    mobile: "4455668877"
}

const x = employeeData.name.split("").splice(0, 2).join("")
const m = employeeData.mobile.split("").splice(-4).join("")
console.log(x + m)