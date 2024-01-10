//program to make a simple calculator (take input from user) 


const prompt = require("prompt-sync")();
const number1 = parseInt(prompt("Enter first number :"));
const number2 = parseInt(prompt("Enter second number :"));

// take the operator input
const operator = parseInt(prompt('Enter operator ( either +, -, * or / ): '));

// program for a simple calculator
let result;

switch(operator) {
    case '+':
         result = number1 + number2;
        console.log(`${number1} + ${number2} = ${result}`);
        break;

    case '-':
         result = number1 - number2;
        console.log(`${number1} - ${number2} = ${result}`);
        break;

    case '*':
         result = number1 * number2;
        console.log(`${number1} * ${number2} = ${result}`);
        break;

    case '/':
         result = number1 / number2;
        console.log(`${number1} / ${number2} = ${result}`);
        break;

    default:
        console.log('Invalid operator');
        break;
}