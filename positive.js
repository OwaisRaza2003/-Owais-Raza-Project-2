const readline = require('readline');

function isPositive(number) {
    return number > 0;
}


function getUserInput() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Enter a number: ', (input) => {
        let num = parseFloat(input);

        if (isNaN(num)) {
            console.log('Invalid input. Please enter a valid number.');
        } else {
            console.log(`Is ${num} positive?`, isPositive(num));
        }

        rl.close();
    });
}


getUserInput();
