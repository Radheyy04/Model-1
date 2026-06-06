const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", (num) => {
    if (num % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
    rl.close();
});
