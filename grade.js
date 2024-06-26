const readline = require('readline');

function getGrade(score) {
    if (score >= 90 && score <= 100) {
        return 'A';
    } else if (score >= 80 && score <= 89) {
        return 'B';
    } else if (score >= 70 && score <= 80) {
        return 'C';
    } else if (score >= 60 && score <= 69) {
        return 'D';
    } else if (score >= 0 && score <= 59) {
        return 'F';
    } else {
        return 'Invalid score'; // This should not happen if input validation is correct
    }
}

// Function to get input from the user
function getUserInput() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Enter your score: ', (input) => {
        let score = parseInt(input, 10);

        if (isNaN(score) || score < 0 || score > 100) {
            console.log('Invalid input. Please enter a valid score between 0 and 100.');
        } else {
            let grade = getGrade(score);
            console.log(`The grade for a score of ${score} is ${grade}`);
        }

        rl.close();
    });
}

// Call the function to get user input
getUserInput();
