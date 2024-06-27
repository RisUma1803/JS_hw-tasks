//array

let sstr1 = "Umidojn Ergashev the student of New Uzbekistan University, Senior of Software Engineering faculty"
let sstr = sstr1.toLowerCase()
let  count = 0
let arr = sstr.split("")
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "a" || arr[i] == "o" || arr[i] == "u" || arr[i] == "e" || arr[i] == "i") {
        count++
    }
}
console.log(count);

// command

let array = [];
let com = prompt("Enter your command")
while (com !== "stop") {
    com = prompt("Enter your command")
}
 for (let i = 0; i < com; i++) {
        
 }