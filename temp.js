const readline = require('readline');

function celsiusToFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
}

// Function to get input from the user
function getUserInput() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Enter temperature in Celsius: ', (input) => {
        let celsiusTemp = parseFloat(input);

        if (isNaN(celsiusTemp)) {
            console.log('Invalid input. Please enter a valid number.');
        } else {
            let fahrenheitTemp = celsiusToFahrenheit(celsiusTemp);
            console.log(`${celsiusTemp}°C is equal to ${fahrenheitTemp}°F`);
        }

        rl.close();
    });
}

// Call the function to get user input
getUserInput();
