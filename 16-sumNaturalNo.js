//Program to Find the Sum of Natural Numbers (Take input from users)

const prompt = require("prompt-sync")();
const num1= parseInt(prompt("Enter the first positive number"));
const num2 = parseInt(prompt("Enter the second positive number"));

const addition = (a, b) => {
    return a + b;
  };

  const result = addition(num1, num2);
  console.log(`sum of ${num1} & ${num2} is ${result}`);

