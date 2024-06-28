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

// command                                                                          DONE

let array = [];

for (let i = 0; i < Infinity; i++) {
    let addel = prompt("Give your command with space")   
    if (addel == "stop" || addel == "STOP" || addel == "Stop") {
        break
    } else if (addel.startsWith("add")) {
        arr1 = addel.split(" ")
        array.push(arr1[1])
    } else if (addel.startsWith("del")) {
        arr2 = addel.split(" ")
        index = array.indexOf(arr2[1])
        array.splice(index, 1)
    }
}
console.log(array);