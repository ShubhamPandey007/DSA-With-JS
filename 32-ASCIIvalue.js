//Program to Find ASCII Value of Character

const prompt = require('prompt-sync')();
const string = prompt('Enter a character:');

const result = string.charCodeAt(0);
console.log(`The ASCII value is: ${result}`);
