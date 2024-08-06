const moblieBrands = [
    {
        name: "apple",
        model: "14 pro max",
        features: ["ratina display", "m1"],
        country: "usa"
    },
    {
        name: "samsung",
        model: "S23 pro max",
        features: ["dummy", "test"],
        country: "north korea"
    },
    {
        name: "moto",
        model: "Edge pro max",
        features: ["dummy", "test"],
        country: "japan"
    }
]

console.log(moblieBrands[2].name)
console.log(moblieBrands[0].features[1])

//------------------------------------------------------------------------------------------------------------------------------------------


const todos = [
    {
        task: "task1",
        priority: 1
    },
    {
        task: "task2",
        priority: 1
    },
    {
        task: "task3",
        priority: 1
    }
]

console.log(todos.splice(1, 1))


function removeTodo(i) {
    todos.splice(i, 1)
}
removeTodo(2)
console.log(todos)


function addtodo(i) {
    todos.push(i)
}
addtodo({ task: "task4", priority: "chill" })
console.log(todos)


//------------------------------------------------------------------------------------------------------------------------------------------

const user1 = [{
    name: "Joe",
    skills: ["html", "css", "js"],
    address: {
        home: {
            patta: "fake home",
            mobile: 805515974,
            members: ["chandler", "monica"]
        },
        office: {
            patta: "fake office",
            mobile: 805515274,
            members: ["ross", "rachel"]

        }
    },

},
{
    name: "Ted",
    skills: ["python", "pandas", "sql"],
    address: {
        home: {
            patta: "pune",
            mobile: 777777,
            members: ["marshal", "lily"]

        },
        office: {
            patta: "berlin",
            mobile: 4444444,
            members: ["barney", "robine"]

        }
    },
}
]
console.log(user1[1].address.home.patta)
console.log(user1[1].skills[2])
console.log(user1[0].address.office)
console.log(user1[0].address.home.mobile)
console.log(user1[1].address.office.members[1])


//------------------------------------------------------------------------------------------------------------------------------------------

function test(arg1, arg2) {
    return [arg1, arg2]
}
function demo(p1, n1, n2) {
    return {
        name: p1,
        skills: test(n1, n2)
    }
}

