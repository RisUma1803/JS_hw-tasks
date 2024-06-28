// arrray method
function getMiddle() {
    let ssstr = prompt("Enter string or number without spaces"),
        arr3 = ssstr.split("") 
        if (arr3.length > 3) {
            arr3.shift()
            arr3.pop()
            ssstr = arr3.join("")
        } else {
            console.log(null);
        }
    console.log(ssstr);
}
getMiddle()

//task 2
function twoLargestNumber() {
    let numbers = prompt("Enter numbers without commas"),
        arr4 = numbers.split(",") 
        sorted = arr4.sort((a,b) => b-a)
        console.log(arr4[0]+", "+arr4[1]); //or console.log(arr4.slice(0,2))
}
twoLargestNumber()