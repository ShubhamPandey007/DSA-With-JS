//Program to find the square root of a number


const prompt = require("prompt-sync")()
const number = parseInt(prompt("Enter the number :"));

const result = Math.sqrt(number);
console.log(`the squre root of ${number} is ${result}`);