let groups = [
    ["Martin", "Daniel", "Keith"],
    ["Margot", "Marina", "Ali"],
    ["Helen", "Jonah", "Sambikos"],
]

for (let i = 0; i < groups.length; i++) {
    let matches = 0
    for (let j = 0; j < groups[i].length; j++) {
        if (groups[i][j].startsWith("M")) {
            matches++
        } else {
            continue
        }
        if (matches === 2) {
            console.log("Found a group with two names starting with an M:");
            console.log(groups[i]);
            break
        }
    }
}