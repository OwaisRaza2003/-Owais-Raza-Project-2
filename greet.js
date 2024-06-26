const readline = require('readline');

function greet(name) {
    return `Hello, ${name}!`;
}

// Function to get input from the user
function getUserInput() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Enter your name: ', (input) => {
        let name = input.trim(); // Trim any leading or trailing whitespace

        if (name === '') {
            console.log('Invalid input. Please enter a valid name.');
        } else {
            let greeting = greet(name);
            console.log(greeting);
        }

        rl.close();
    });
}

// Call the function to get user input
getUserInput();
