let str = prompt("Enter anyting you want")
while (!isNaN(str)) {
    str = prompt("Enter a valid string")
}

let array = str.split(" ")
let updStr = array.join("")
for (let i = 0; i < updStr.length; i++) {
    updStr = updStr.replace("", "-")   
}
console.log(updStr);

// remove exclamation


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

