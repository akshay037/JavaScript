//normal import
import display, { x, arr, obj } from "./variable.js"
console.log("app running.....", x, arr, obj)

//default import

display()

import * as variable from "./variable.js" // as variable is the object here so we can access what ever we what from another file 
console.log(variable.x)
console.log(variable.arr)
console.log(variable.obj)
console.log(variable.default)