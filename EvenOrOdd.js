const readline = require('readline');

function isEvenOrOdd(number) {
    if (number % 2 === 0) {
        return `${number} is even.`;
    } else {
        return `${number} is odd.`;
    }
}


function getUserInput() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Enter a number: ', (input) => {
        let num = parseInt(input, 10);

        if (isNaN(num)) {
            console.log('Invalid input. Please enter a valid number.');
        } else {
            console.log(isEvenOrOdd(num));
        }

        rl.close();
    });
}


getUserInput();
