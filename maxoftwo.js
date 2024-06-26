const readline = require('readline');

function Maxoftwo(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else if (num2 > num1) {
        return num2;
    } else {
        // If both numbers are equal
        return num1; // or return num2; They are the same in this case.
    }
}

// Function to get input from the user
function getUserInput() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Enter the first number: ', (input1) => {
        rl.question('Enter the second number: ', (input2) => {
            let num1 = parseInt(input1, 10);
            let num2 = parseInt(input2, 10);

            if (isNaN(num1) || isNaN(num2)) {
                console.log('Invalid input. Please enter valid numbers.');
            } else {
                console.log("The larger number is:", Maxoftwo(num1, num2));
            }

            rl.close();
        });
    });
}

// Call the function to get user input
getUserInput();
