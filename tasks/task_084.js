// JavaScript Program To Check If A Variable Is undefined or null

function checkVariable(variable) {

    if (variable == null) {
        console.log('The variable is undefined or null');
    }
    else {
        console.log('The variable is neither undefined nor null');
    }
}

let newVariable;

checkVariable(5);
checkVariable('hello');
checkVariable(null);
checkVariable(newVariable);