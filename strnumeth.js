let str = prompt("Enter anyting you want")
while (!isNaN(str)) {
    str = prompt("Enter a valid string")
}

for (let i = 0; i < str.length; i++) {
    str = str.replace(" ", "")
}
let array1 = str.split("")
let updStr = array1.join("-")
console.log(updStr);

// remove exclamation                                                                      DONE


let string = prompt("Enter string")

let numbe = prompt("Enter number")
while (isNaN(numbe) || numbe == 0) {
    numbe = prompt("Enter a valid number")
}

function removeExclamation(string, numbe) {
    for (let i = 0; i < numbe; i++) {
        string = string.replace("!", "")        
    }
    return string
}
console.log(removeExclamation(string, numbe));

