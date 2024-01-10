const prompt = require('prompt-sync')();
const number = parseInt(prompt('Enter a positive integer: '));

function sum(num) {
    if(num > 0) {
        return num + sum(num - 1);
    }
    else {
        return num;
    }
 }

const result = sum(number);

// display the result
console.log(`The sum is ${result}`);