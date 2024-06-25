                                                    // Function: Age and random tasks


// let age = function calcAge(b, c){
//     return c-b;
// };

// const name = prompt('Enter your name')
// const b = +prompt('When is your birth year')
// while (isNaN(b) || b == 0) {
//     b = +prompt('Only number')
// }

// const c= +prompt('What is current year')
// while (isNaN(c) || c == 0) {
//     c = +prompt('Only number')
// }

// alert(name + ", you are " + age(b, c) + " yaers old")




function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomOperation() {
    const operations = ['+', '-', '*', '/'];
    return operations[getRandomInt(0, operations.length - 1)];
}

function generateProblem() {
    const num1 = getRandomInt(1, 100);
    const num2 = getRandomInt(1, 100);
    const operation = getRandomOperation();
    let answer;
    switch (operation) {
        case '+':
            answer = num1 + num2;
            break;
        case '-':
            answer = num1 - num2;
            break;
        case '*':
            answer = num1 * num2;
            break;
        case '/':
            // Ensuring no division by zero
            answer = num1 / (num2 === 0 ? 1 : num2);
            break;
    }
    return {
        problem: `${num1} ${operation} ${num2}`,
        answer: answer
    };
}

let numProblems = +prompt('How many problems do you want to solve?');
while (isNaN(numProblems) || numProblems <= 0) {
    numProblems = +prompt('Please enter a valid number');
}

for (let i = 0; i < numProblems; i++) {
    const { problem, answer } = generateProblem();
    const userAnswer = +prompt(`Problem ${i + 1}: ${problem} = ?`);
    
    if (isNaN(userAnswer)) {
        console.log(`Problem ${i + 1}: ${problem} = ${answer} (Your answer was not a valid number)`);
    } else if (Math.abs(userAnswer - answer) < 0.0001) { // Allow for minor floating point inaccuracies
        console.log(`Problem ${i + 1}: ${problem} = ${userAnswer} (Correct!)`);
    } else {
        console.log(`Problem ${i + 1}: ${problem} = ${userAnswer} (Incorrect, correct answer is ${answer})`);
    }
}
