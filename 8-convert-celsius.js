//Program to Convert Celsius to Fahrenheit, 
//convert the celsius value to fahrenheit by using the formula: fahrenheit = celsius * 1.8 + 32

const prompt= require('prompt-sync')()
const celsius = prompt("Enter a celsius value: ");

const fahrenheit = (celsius * 1.8) + 32

console.log(`${celsius} degree celsius is equal to ${fahrenheit} degree fahrenheit.`);

