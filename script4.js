
// Square pattern and ships


let num = +prompt("Enter a number")

while (isNaN(num) || num ==0) {
    num = +prompt("Display only number")
}


let a = " ";
for (let i = 1; i <= num; i++) {
    a += i + " ship" + (i > 1 ? "s" : "") + "...";
}

console.log(a);

// Task 2                                                            DONE

let n = +prompt("Enter a number")

while (isNaN(n) || n ===0) {
    n = +prompt("Display only number")
}

if (n % 2 === 0) {
    n = n + 1
}

let square = "";
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (i == j || j == 0 || j == n - 1 || i == 0 || i == n - 1 || j == n - 1 - i) {
            square += " & "
        } else {
            square += "   "
        }
        
    } 
    
    console.log(square);   
    square = ""
}


