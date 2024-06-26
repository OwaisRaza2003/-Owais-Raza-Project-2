const readline = require('readline');

function square(number) {
    return number * number;
}

// Function to get input from the user
function getUserInput() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Enter a number: ', (input) => {
        let num = parseFloat(input); // Use parseFloat for decimal input, parseInt for integer input

        if (isNaN(num)) {
            console.log('Invalid input. Please enter a valid number.');
        } else {
            let squaredValue = square(num);
            console.log(`The square of ${num} is ${squaredValue}`);
        }

        rl.close();
    });
}

// Call the function to get user input
getUserInput();
