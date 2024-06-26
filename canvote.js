const readline = require('readline');

function canVote(age) {
    if (age >= 18) {
        return "You are eligible to vote.";
    } else {
        return "You are not eligible to vote yet.";
    }
}

// Set up readline to get input from the user
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter your age: ', (input) => {
    let age = parseInt(input, 10); // Convert the input to an integer
    if (isNaN(age)) {
        console.log("Invalid input. Please enter a valid number.");
    } else {
        console.log(canVote(age));
    }
    rl.close();
});
